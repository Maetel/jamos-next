import { _ProcessCommands } from "@/types/ProcTypes";

export type ImageCompressionOption = {
  quality: number;
  type: "jpeg" | "png" | "webp";
  maxWidth: number;
  returnType: "blob" | "dataUrl";
};

const defaultImageCompressionOption: ImageCompressionOption = {
  quality: 0.8,
  type: "webp",
  maxWidth: -1,
  returnType: "dataUrl",
};

export const compressImage = (
  file: File,
  option?: Partial<ImageCompressionOption>,
): Promise<string | Blob> => {
  const mergedOption = { ...defaultImageCompressionOption, ...(option ?? {}) };
  const { quality, type, maxWidth, returnType } = mergedOption;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Resize the image
        let width = img.width;
        let height = img.height;

        // Scale down the image if it's larger than maxWidth
        if (maxWidth !== -1 && width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);

        // Compress the image by setting quality (0 to 1)
        const compressedDataUrl = canvas.toDataURL(`image/${type}`, quality);

        // remove canvas
        canvas.remove();

        if (returnType === "dataUrl") {
          resolve(compressedDataUrl);
        } else if (returnType === "blob") {
          const blob = await fetch(compressedDataUrl).then((r) => r.blob());
          resolve(blob);
        }
        throw new Error("Invalid returnType");
      };

      img.onerror = (err) => {
        reject(err);
      };
    };
  });
};

export function getProcessCommandsIcon(type: string) {
  return (
    _ProcessCommands.find((cmd) => cmd.comp === type)?.icon ??
    "/imgs/icon-default.svg"
  );
}

import type { NextApiRequest } from "next";
import formidable from "formidable";
import * as fs from "fs";

export const parseFormData = async (
  req: NextApiRequest,
  formdataKey: string,
  type?: BlobPropertyBag["type"],
): Promise<{ blob: Blob; name: string }> => {
  const form = formidable({});
  const file: { blob: Blob; name: string } = await new Promise(
    (resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        // console.log({ files });
        const returnFile = files?.[formdataKey]?.[0];
        console.log({ returnFile });
        const { mimetype: blobType, filepath, originalFilename } = returnFile;
        if (err || !returnFile || !filepath || !originalFilename) {
          reject(err);
        }

        const buffer = fs.readFileSync(filepath);
        const blob = new Blob([buffer], {
          type: blobType,
          ...(type ? { type } : {}),
        });

        resolve({ blob, name: originalFilename });
      });
    },
  );
  return file;
};

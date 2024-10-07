import { compressImage } from "@/src/clientutils";
import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);

  // Compress the image using canvas

  // Handle image change and compress the file
  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // For preview
      const compressed = await compressImage(file);
      setCompressedImage(compressed as string);
    }
  };

  // Download the compressed image
  const handleDownloadImage = () => {
    if (!compressedImage) return;

    // Create a blob from the compressed data URL
    const link = document.createElement("a");
    link.href = compressedImage;
    link.download = "compressed_image.jpg"; // Set the file name
    link.click();
  };

  return (
    <div>
      <h2>Upload and Compress an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {selectedImage && (
        <div>
          <h3>Original Image Preview:</h3>
          <img
            src={selectedImage}
            alt="Original Image"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      )}

      {compressedImage && (
        <div>
          <h3>Compressed Image Preview:</h3>
          <img
            src={compressedImage}
            alt="Compressed Image"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      )}

      <button onClick={handleDownloadImage}>Download Compressed Image</button>
    </div>
  );
};

export default ImageUpload;

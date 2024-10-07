import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle file input change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImageFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image upload to the server
  const handleImageUpload = async () => {
    if (!selectedImageFile) return;

    const formData = new FormData();
    formData.append("image", selectedImageFile); // Add the image to the form data

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      console.log({ response: await response.json() });

      if (response.ok) {
        console.log("Image uploaded successfully");
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {selectedImage && (
        <div>
          <h3>Selected Image Preview:</h3>
          <img
            src={selectedImage}
            alt="Selected Image"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      )}

      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;

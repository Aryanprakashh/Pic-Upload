import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";
import ImageDrawer from "./ImageDrawer";
import "./ImageUpload.css";

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    onUpload(image);
  };

  return (
    <div className="image-upload">
      <h2 className="hello-message">Upload Your Image Here.</h2>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={handleImageUpload}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
        <ImageDrawer image={image} onClose={handleCloseDrawer} />
      </Drawer>
    </div>
  );
};

export default ImageUpload;

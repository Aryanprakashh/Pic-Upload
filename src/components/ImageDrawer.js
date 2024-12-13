import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Button } from "@mui/material";
import "./ImageDrawer.css";
import getCroppedImg from "../utils/cropImage";

const ImageDrawer = ({ image, onClose, onCropComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleRotate = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  const handleFlipX = () => {
    setFlipX((prevFlipX) => !prevFlipX);
  };

  const handleFlipY = () => {
    setFlipY((prevFlipY) => !prevFlipY);
  };

  const handleCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels, rotation, flipX, flipY);
      onCropComplete(croppedImage);
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="image-drawer">
      <div
        className="cropper-wrapper"
        style={{
          transform: `scaleX(${flipX ? -1 : 1}) scaleY(${flipY ? -1 : 1})`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Cropper
          image={image}
          crop={crop}
          rotation={rotation}
          zoom={1}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={handleCropComplete}
        />
      </div>
      <div className="drawer-buttons">
        <Button onClick={handleRotate}>Rotate</Button>
        <Button onClick={handleFlipX}>Flip Horizontal</Button>
        <Button onClick={handleFlipY}>Flip Vertical</Button>
        <Button onClick={handleCrop}>Enter</Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
};

export default ImageDrawer;

import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Button } from "@mui/material";
import "./ImageDrawer.css";

const ImageDrawer = ({ image, onClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [flipX, setFlipX] = useState(1);
  const [flipY, setFlipY] = useState(1);

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    // Handle crop logic here
  };

  const handleRotate = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  const handleFlipX = () => {
    setFlipX((prevFlipX) => -prevFlipX);
  };

  const handleFlipY = () => {
    setFlipY((prevFlipY) => -prevFlipY);
  };

  const handleReplace = () => {
    onClose();
  };

  return (
    <div className="image-drawer">
      <Cropper
        image={image}
        crop={crop}
        rotation={rotation}
        zoom={1}
        aspect={4 / 3}
        onCropChange={setCrop}
        onCropComplete={handleCropComplete}
        style={{ transform: `scaleX(${flipX}) scaleY(${flipY})` }}
      />
      <div className="drawer-buttons">
        <Button onClick={handleRotate}>Rotate</Button>
        <Button onClick={handleFlipX}>Flip Horizontal</Button>
        <Button onClick={handleFlipY}>Flip Vertical</Button>
        <Button onClick={handleReplace}>Replace</Button>
      </div>
    </div>
  );
};

export default ImageDrawer;

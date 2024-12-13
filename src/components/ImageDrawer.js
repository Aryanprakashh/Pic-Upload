import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Button } from "@mui/material";
import "./ImageDrawer.css";

const ImageDrawer = ({ image, onClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    // Handle crop logic here
  };

  const handleRotate = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  const handleFlipX = () => {
    setFlipX((prevFlipX) => !prevFlipX);
  };

  const handleFlipY = () => {
    setFlipY((prevFlipY) => !prevFlipY);
  };

  const handleReplace = () => {
    onClose();
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
        <Button onClick={handleReplace}>Replace</Button>
      </div>
    </div>
  );
};

export default ImageDrawer;

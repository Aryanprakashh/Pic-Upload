import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import MasonryImageList from "./components/MasonryImageList";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <div className="App">
      <div className="background-effect"></div>
      <ImageUpload onUpload={handleUpload} />
      <MasonryImageList images={images} />
    </div>
  );
};

export default App;

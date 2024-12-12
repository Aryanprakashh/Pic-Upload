import React from "react";
import Masonry from "react-masonry-css";
import "./MasonryImageList.css";

const MasonryImageList = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
        <img key={index} src={image} alt={`uploaded ${index}`} />
      ))}
    </Masonry>
  );
};

export default MasonryImageList;

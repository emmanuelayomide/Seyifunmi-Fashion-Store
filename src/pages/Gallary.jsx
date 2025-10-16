import React, { useState } from "react";
import "./Gallery.css";
import products from "../product.js";

const Gallery = () => {
  // how many items to show initially
  const [visibleCount, setVisibleCount] = useState(18);

  // load more items when button is clicked
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // show 9 more items
  };

  // slice the product list based on visibleCount
  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">
        SeyiFunmi <span className="personaldownload">Native</span> Collection
      </h2>
 <div data-aos="fade-up">
      <div className="gallery-grid">
        {visibleProducts.map((product) => (
          <div key={product.id} className="gallery-card">
            <img
              src={product.image}
              alt={product.name}
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
</div>
      {/* Load More Button */}
      {visibleCount < products.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;

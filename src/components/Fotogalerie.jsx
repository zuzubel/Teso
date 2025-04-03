import React from 'react';

const Fotogalerie = () => {
  return (
    <div className="page-container">
      <h1>Fotogalerie</h1>
      <div className="gallery-grid">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="gallery-item">
            <img
              src={`https://via.placeholder.com/300x200?text=Foto+${index}`}
              alt={`Fotografie ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fotogalerie;

import React from 'react';

const ProductCard = ({ name, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{name}</h2>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
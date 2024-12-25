import React from 'react';

function ImageGallary({ carDetail }) {
  if (!carDetail?.images?.length) {
    return (
      <div className="w-full h-[500px] bg-slate-200 rounded-xl flex items-center justify-center">
        <p>No image available</p>
      </div>
    );
  }

  return (
    <div>
      <img
        src={carDetail.images[0].imageUrl}
        className="w-full h-[500px] rounded-xl object-cover"
        alt="Car"
      />
    </div>
  );
}

export default ImageGallary;

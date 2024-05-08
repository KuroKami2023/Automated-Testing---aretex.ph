import React from 'react';

const Card = ({ children, img, ...props }) => {
  return (
    <div {...props} className="relative w-1/1 sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1">
      <div className=" max-w-xs h-60 overflow-hidden shadow-lg group">
        <img
          src={img}
          className="object-contain w-full h-full transition-transform group-hover:scale-110 duration-200"
          alt="Card Image"
        />
        <div className="absolute inset-0 flex items-end justify-center text-center">
          <div className="text-white text-[15px] font-mono font-bold mb-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

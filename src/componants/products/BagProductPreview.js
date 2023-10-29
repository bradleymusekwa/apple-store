import React from 'react';

function BagProductPreview({image}) {
  return (
    <div className=' w-[80px] h-[80px] flex justify-center items-center bg-white m-[8px] rounded-[12px] '>
    <img src={image} alt="" className="flex max-h-[60px] object-contain max-w-[60px] " />
    </div>
  )
}

export default BagProductPreview
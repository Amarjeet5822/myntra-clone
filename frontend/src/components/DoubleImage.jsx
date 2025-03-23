import React from 'react'

function DoubleImage(props) {
  const {imgUrlFirst, imgUrlSecond, imgAlt } = props || {};
  return (
    <div className="max-w-full mx-auto flex">
          <img
            className="w-1/2 h-auto object-contain"
            src={`${imgUrlFirst}`}
            alt={`${imgAlt}`}
          />
          <img
            className="w-1/2 h-auto object-contain"
            src={`${imgUrlSecond}`}
            alt={`${imgAlt}`}
          />
        </div>
  )
}

export default DoubleImage
import React from 'react'

function SingleImage(props) {
  const {imgUrl, imgAlt} = props || {}
  return (
    <div className="max-w-full mx-auto">
          <div className="mx-auto">
            <img
              className="w-full h-auto object-contain"
              src={`${imgUrl}`}
              alt={`${imgAlt}`}
            />
          </div>
        </div>
  )
}

export default SingleImage
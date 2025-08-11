import React from 'react'

const Image = ({src,alt,design}) => {
  return (
    <img className={design} src={src} alt={alt} />
  )
}

export default Image
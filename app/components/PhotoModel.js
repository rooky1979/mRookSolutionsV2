import React from 'react'
import photoStyles from "../styles/Photomodel.module.css"

const PhotoModel = ({imageUrl, onClose}) => {

  return (
    <div className={photoStyles.modalOverlay} onClick={onClose}>
    <div className={photoStyles.modalContent} onClick={(e) => e.stopPropagation()}>
      <img src={imageUrl} alt="Enlarged" onClick={onClose}/>
    </div>
  </div>
  )
}

export default PhotoModel

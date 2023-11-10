import React from 'react'
import styles from "../styles/Photomodel.module.css"

const PhotoModel = ({imageUrl, onClose}) => {

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <img src={imageUrl} alt="Enlarged" onClick={onClose}/>
    </div>
  </div>
  )
}

export default PhotoModel

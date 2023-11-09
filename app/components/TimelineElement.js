import React from 'react'
import styles from "../styles/TimeLine.module.css";

const TimelineElement = ({title, description}) => {
  return (
    <div className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
  )
}

export default TimelineElement

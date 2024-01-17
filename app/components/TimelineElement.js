import React from 'react'
import elementStyles from "../styles/Timeline.module.css";

const TimelineElement = ({title, description}) => {
  return (
    <div className={elementStyles.card}>
        <div className={elementStyles.info}>
          <h3 className={elementStyles.title}>{title}</h3>
          <p className={elementStyles.description}>{description}</p>
        </div>
      </div>
  )
}

export default TimelineElement

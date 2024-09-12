import React from 'react'
import './JobCard.css'

const JobCard = ({job}) => {
  const {title, location, salary, phone} = job

  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{salary}</p>
      <p>{phone}</p>
    </div>
  )
}

export default JobCard

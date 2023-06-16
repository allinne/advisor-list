import React from 'react'

const AdvisorPreview: React.FC<{ advisor: object }> = ({ advisor }) => {
  return (
    <div>{advisor.name}</div>
  )
}

export default AdvisorPreview

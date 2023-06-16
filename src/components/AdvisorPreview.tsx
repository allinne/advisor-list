import React from 'react';
import { Advisor, AvailabilityStatus } from '../@types';

const AdvisorPreview: React.FC<{ advisor: Advisor }> = ({ advisor }) => {
  return (
    <tr>
      <td>{advisor.name}</td>
      <td>{AvailabilityStatus[advisor.status]}</td>
      <td>{advisor.language}</td>
      <td>{advisor.reviewNumber}</td>
    </tr>
  )
}

export default AdvisorPreview

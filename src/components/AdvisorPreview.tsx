import React from 'react';
import { Advisor, AvailabilityStatus } from '../@types';

const AdvisorPreview: React.FC<{ advisor: Advisor }> = ({ advisor }) => {
  return (
    <tr data-testid="advisor-item">
      <td data-testid="advisor-name">{advisor.name}</td>
      <td data-testid="advisor-status">{AvailabilityStatus[advisor.status]}</td>
      <td data-testid="advisor-language">{advisor.language}</td>
      <td data-testid="advisor-reviews">{advisor.reviewNumber}</td>
    </tr>
  )
}

export default AdvisorPreview

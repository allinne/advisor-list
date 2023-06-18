import React from 'react';
import { Advisor, AvailabilityStatus } from '../@types';

const AdvisorPreview: React.FC<{ advisor: Advisor }> = ({ advisor }) => {
  const statusClassName = `advisor-item__status advisor-item__status--${AvailabilityStatus[advisor.status]}`;

  return (
    <tr data-testid="advisor-item" className='advisor-item'>
      <td data-testid="advisor-name" className='advisor-item__name'>
        {advisor.name}
      </td>
      <td
        className={statusClassName}
        data-testid="advisor-status"
      ></td>
      <td data-testid="advisor-language" className='advisor-item__language'>
        {advisor.language}
      </td>
      <td data-testid="advisor-reviews" className='advisor-item__reviews'>
        {advisor.reviewNumber}
      </td>
    </tr>
  )
}

export default AdvisorPreview

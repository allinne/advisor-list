import React from 'react';
import { Advisor } from '../@types';

const AdvisorPreview: React.FC<{ advisor: Advisor }> = ({ advisor }) => {
  return (
    <tr>
      <td>{advisor.name}</td>
      <td>{advisor.isOnline ? 'online' : 'offline'}</td>
      <td>{advisor.language}</td>
      <td>{advisor.reviewNumber}</td>
    </tr>
  )
}

export default AdvisorPreview

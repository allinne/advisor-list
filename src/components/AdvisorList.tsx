import { useContext } from 'react';
import { CurrentSortingContext } from '../contexts/index';

import AdvisorPreview from './AdvisorPreview';
import { Advisor } from '../@types';
// import { fetchAdvisors } from '../api-client';

function AdvisorList({ initialAdvisors }) {
  const { currentSorting } = useContext(CurrentSortingContext);

  let advisors: Advisor[] = [];
  switch (currentSorting['byReviews']) {
    case 'asc':
      advisors = [...initialAdvisors].sort((a, b) => a.reviewNumber - b.reviewNumber);
      break;
    case 'desc':
      advisors = [...initialAdvisors].sort((a, b) => b.reviewNumber - a.reviewNumber);
      break;
    case '':
    default:
      advisors = initialAdvisors;
  }

  return (
    <>
      <div>AdvisorList</div>
      <table>
      <thead>
        <tr>
          <td>Advisor</td>
          <td>status</td>
          <td>language</td>
          <td>review number</td>
        </tr>
      </thead>
      <tbody>
        {advisors.map((el) => {
          return <AdvisorPreview key={el.id} advisor={el}/>
        })}
      </tbody>
    </table>
    </>
  )
}

export default AdvisorList;

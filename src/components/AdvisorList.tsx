import { useContext } from 'react';
import { CurrentSortingContext, CurrentFilteringContext } from '../contexts/index';
import { LANGUAGES } from '../constants';

import AdvisorPreview from './AdvisorPreview';
import { Advisor, AvailabilityStatus } from '../@types';
// import { fetchAdvisors } from '../api-client';

function AdvisorList({ initialAdvisors }) {
  const { currentSorting } = useContext(CurrentSortingContext);
  const { currentFiltering } = useContext(CurrentFilteringContext);

  let filteredByLanguageAdvisors: Advisor[] = [];
  if (LANGUAGES.includes(currentFiltering['language'])) {
    filteredByLanguageAdvisors = initialAdvisors.filter(el => el.language === currentFiltering['language']);
  } else {
    filteredByLanguageAdvisors = initialAdvisors;
  }

  let filteredByStatusAdvisors: Advisor[] = [];
  if (currentFiltering['status'] === AvailabilityStatus.default) {
    filteredByStatusAdvisors = filteredByLanguageAdvisors;
  } else {
    filteredByStatusAdvisors = filteredByLanguageAdvisors.filter(el => el.status === currentFiltering['status']);
  }

  let sortedAdvisors: Advisor[] = [];
  switch (currentSorting['byReviews']) {
    case 'asc':
      sortedAdvisors = [...filteredByStatusAdvisors].sort((a, b) => a.reviewNumber - b.reviewNumber);
      break;
    case 'desc':
      sortedAdvisors = [...filteredByStatusAdvisors].sort((a, b) => b.reviewNumber - a.reviewNumber);
      break;
    case '':
    default:
      sortedAdvisors = filteredByStatusAdvisors;
  }

  return (
    <tbody>
      {sortedAdvisors.map((el) => {
        return <AdvisorPreview key={el.id} advisor={el}/>
      })}
    </tbody>
  )
}

export default AdvisorList;

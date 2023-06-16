import { useState } from 'react';
import AdvisorList from "./AdvisorList";
import { CurrentSortingContext, CurrentFilteringContext } from '../contexts';
import SortReview from './SortReview';
import FilterLanguage from './FilterLanguage';
import FilterStatus from './FilterStatus';
import { INITIAL_SORTING, INITIAL_FILTERING } from '../constants';
import { Advisor } from '../@types';

function App({ initialData }: { initialData: Advisor[] }) {
  const [ currentSorting, setCurrentSorting ] = useState(INITIAL_SORTING);
  const [ currentFiltering, setCurrentFiltering ] = useState(INITIAL_FILTERING);

  return (
    <CurrentSortingContext.Provider value={{ currentSorting, setCurrentSorting }}>
      <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
        <table className='body'>
          <thead>
            <tr>
              <td>Advisor</td>
              <td><FilterStatus/></td>
              <td><FilterLanguage/></td>
              <td><SortReview/></td>
            </tr>
          </thead>
          <AdvisorList initialAdvisors={initialData}/>
        </table>
      </CurrentFilteringContext.Provider>
    </CurrentSortingContext.Provider>
  )
}

export default App;

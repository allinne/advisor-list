import { useState } from 'react';
import AdvisorList from "./AdvisorList";
import { CurrentSortingContext, CurrentFilteringContext } from '../contexts';
import SortReview from './SortReview';
import FilterLanguage from './FilterLanguage';
import { INITIAL_SORTING, INITIAL_FILTERING } from '../constants';
import FilterStatus from './FilterStatus';

function App({ initialData }) {
  const [ currentSorting, setCurrentSorting ] = useState(INITIAL_SORTING);
  const [ currentFiltering, setCurrentFiltering ] = useState(INITIAL_FILTERING);

  return (
    <CurrentSortingContext.Provider value={{ currentSorting, setCurrentSorting }}>
      <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
        <table>
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

import { useState } from 'react';
import AdvisorList from "./AdvisorList";
import { CurrentSortingContext, CurrentFilteringContext } from '../contexts';
import SortReview from './SortReview';
import FilterLanguage from './FilterLanguage';
import FilterStatus from './FilterStatus';
import { withFilterSelect } from './HOC/withFilterSelect';
import { INITIAL_SORTING, INITIAL_FILTERING, FUNC_STUB } from '../constants';
import { Advisor } from '../@types';

const FilterStatusComponent = withFilterSelect(FilterStatus);
const FilterLanguageComponent = withFilterSelect(FilterLanguage);

function App({ initialData }: { initialData: Advisor[] }) {
  const [ currentSorting, setCurrentSorting ] = useState(INITIAL_SORTING);
  const [ currentFiltering, setCurrentFiltering ] = useState(INITIAL_FILTERING);

  return (
    <div className='content'>
      <h1>Advisors</h1>
      <CurrentSortingContext.Provider value={{ currentSorting, setCurrentSorting }}>
        <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
          <table className='advisor-table' cellPadding={0} cellSpacing={0}>
            <thead className='advisor-table__head'>
              <tr>
                <td>Advisor</td>
                <FilterStatusComponent createSelectElement={FUNC_STUB}/>
                <FilterLanguageComponent createSelectElement={FUNC_STUB}/>
                <SortReview/>
              </tr>
            </thead>
            <AdvisorList initialAdvisors={initialData}/>
          </table>
        </CurrentFilteringContext.Provider>
      </CurrentSortingContext.Provider>
    </div>
  )
}

export default App;

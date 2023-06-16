import { useState } from 'react';
import AdvisorList from "./AdvisorList";
import { CurrentSortingContext } from '../contexts';
import SortingPanel from './SortingPanel';
import { INITIAL_SORTING } from '../constants';

function App({ initialData }) {
  const [ currentSorting, setCurrentSorting ] = useState(INITIAL_SORTING);

  return (
    <>
      <CurrentSortingContext.Provider value={{ currentSorting, setCurrentSorting }}>
        <SortingPanel />
        <AdvisorList initialAdvisors={initialData}/>
      </CurrentSortingContext.Provider>
    </>
  )
}

export default App;

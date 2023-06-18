import { ChangeEvent, useContext, useMemo } from 'react';
import { CurrentFilteringContext } from '../contexts/index';
import { LANGUAGES } from '../constants';

function FilterLanguage() {
  const { currentFiltering, setCurrentFiltering } = useContext(CurrentFilteringContext);

  const languageList = useMemo(() => {
    return ['all', ...LANGUAGES];
  }, []);
  const languages = languageList.map((el: string, i: number) => {
    return (
      <option value={i} key={i} data-testid="select-language-option">
        {el}
      </option>
    );
  });

  const currentIndex = useMemo(() => {
    return languageList.findIndex((language: string) => language === currentFiltering.language);
  }, [languageList, currentFiltering.language]);

  const handleSelectChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    setCurrentFiltering({ ...currentFiltering, language: languageList[Number(ev.currentTarget.value)] });
  };

  return (
    <td>
      <div className='advisor-table__head-filter'>
        <label htmlFor='select-language'>
          Language
        </label>
        <select
          onChange={handleSelectChange}
          value={currentIndex}
          className="advisor-table__select"
          id='select-language'
          data-testid="select-language"
          tabIndex={2}
          aria-label='Filter by Language'
        >
          {languages}
        </select>
      </div>
    </td>
  )
}

export default FilterLanguage

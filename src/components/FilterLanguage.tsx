import { ChangeEvent, useContext, useMemo } from 'react';
import { CurrentFilteringContext } from '../contexts/index';
import { FilterSelectData } from '../@types';
import { LANGUAGES } from '../constants';

function FilterLanguage(props: FilterSelectData) {
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

  const currentValue = useMemo(() => {
    return languageList.findIndex((language: string) => language === currentFiltering.language);
  }, [languageList, currentFiltering.language]);

  const handleSelectChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    setCurrentFiltering({ ...currentFiltering, language: languageList[Number(ev.currentTarget.value)] });
  };

  const selectElement = props.createSelectElement({
    selectType: 'language',
    optionList: languages,
    currentValue,
    handleSelectChange
  });

  return selectElement;
}

export default FilterLanguage;

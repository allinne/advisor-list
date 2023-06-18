import { ChangeEvent, useContext, useMemo } from 'react';
import { CurrentFilteringContext } from '../contexts/index';
import { AvailabilityStatus, FilterSelectData } from '../@types';
import { AVAILABILITY_STATUS_LIST } from '../constants';

function FilterStatus(props: FilterSelectData) {
  const { currentFiltering, setCurrentFiltering } = useContext(CurrentFilteringContext);

  const statuses = useMemo(() => {
    return AVAILABILITY_STATUS_LIST.map((el) => {
      return (
        <option value={el} key={el} data-testid="select-status-option">
          {el}
        </option>
      );
    });
  }, []);

  const handleSelectChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    setCurrentFiltering({ ...currentFiltering, status: AvailabilityStatus[ev.currentTarget.value as keyof typeof AvailabilityStatus] });
  };

  const currentValue = AvailabilityStatus[currentFiltering.status];

  const selectElement = props.createSelectElement({
    selectType: 'status',
    optionList: statuses,
    currentValue,
    handleSelectChange
  });

  return selectElement;
}

export default FilterStatus;

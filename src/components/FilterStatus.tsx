import { ChangeEvent, useContext, useMemo } from 'react';
import { CurrentFilteringContext } from '../contexts/index';
import { AvailabilityStatus } from '../@types';
import { AVAILABILITY_STATUS_LIST } from '../constants';

function FilterStatus() {
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

  return (
    <label>
      Status
      <select
        onChange={(ev) => handleSelectChange(ev)}
        value={AvailabilityStatus[currentFiltering.status]}
        data-testid="select-status"
      >
        {statuses}
      </select>
    </label>
  )
}

export default FilterStatus

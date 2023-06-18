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
    <td>
      <div className="advisor-table__head-filter">
        <label htmlFor="select-status">
          Status
        </label>
        <select
          onChange={handleSelectChange}
          value={AvailabilityStatus[currentFiltering.status]}
          className="advisor-table__select"
          id="select-status"
          data-testid="select-status"
          tabIndex={1}
          aria-label='Filter by Status'
        >
          {statuses}
        </select>
      </div>
    </td>
  )
}

export default FilterStatus

import { render, screen, fireEvent } from '@testing-library/react';
import { INITIAL_FILTERING, FUNC_STUB } from '../constants';
import { CurrentFilteringContext } from '../contexts/index';
import FilterStatus from '../components/FilterStatus';
import { withFilterSelect } from '../components/HOC/withFilterSelect';
import { AvailabilityStatus } from '../@types';

const FilterStatusComponent = withFilterSelect(FilterStatus);

describe('FilterStatus', () => {
  it('renders a component', async () => {
    const currentFiltering = INITIAL_FILTERING;
    const setCurrentFiltering = jest.fn();

    render(
      <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
        <table>
          <thead>
            <tr>
              <FilterStatusComponent createSelectElement={FUNC_STUB}/>
            </tr>
          </thead>
        </table>
      </CurrentFilteringContext.Provider>
    );

    const options = screen.getAllByTestId('select-status-option');
    expect((options[0] as HTMLOptionElement).selected).toBeTruthy();
  });

  it('renders selected not default option', async () => {
    const currentFiltering = {
      ...INITIAL_FILTERING,
      status: AvailabilityStatus.offline,
    };
    const setCurrentFiltering = jest.fn();

    render(
      <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
        <table>
          <thead>
            <tr>
              <FilterStatusComponent createSelectElement={FUNC_STUB}/>
            </tr>
          </thead>
        </table>
      </CurrentFilteringContext.Provider>
    );

    const options = screen.getAllByTestId('select-status-option');
    expect((options[2] as HTMLOptionElement).selected).toBeTruthy();
  });

  it('should call setCurrentFiltering', async () => {
    const currentFiltering = INITIAL_FILTERING;
    const setCurrentFiltering = jest.fn();

    render(
      <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
        <table>
          <thead>
            <tr>
              <FilterStatusComponent createSelectElement={FUNC_STUB}/>
            </tr>
          </thead>
        </table>
      </CurrentFilteringContext.Provider>
    );

    fireEvent.change(screen.getByTestId('select-status'), { target: { value: 1 } });

    expect(setCurrentFiltering).toHaveBeenCalled();
  });
});

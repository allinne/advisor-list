import { render, screen, fireEvent } from '@testing-library/react';
import { INITIAL_FILTERING } from '../constants';
import { CurrentFilteringContext } from '../contexts/index';
import FilterStatus from '../components/FilterStatus';
import { AvailabilityStatus } from '../@types';

describe('FilterStatus', () => {
  it('renders a component', async () => {
    const currentFiltering = INITIAL_FILTERING;
    const setCurrentFiltering = jest.fn();

    render(
      <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
        <FilterStatus/>
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
        <FilterStatus/>
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
        <FilterStatus/>
      </CurrentFilteringContext.Provider>
    );

    fireEvent.change(screen.getByTestId('select-status'), { target: { value: 1 } });

    expect(setCurrentFiltering).toHaveBeenCalled();
  });
});

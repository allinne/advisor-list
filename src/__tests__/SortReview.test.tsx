import { render, screen, fireEvent } from '@testing-library/react';
import { INITIAL_SORTING, LANGUAGES } from '../constants';
import { CurrentSortingContext } from '../contexts/index';
import { Sorting, SortingType } from '../@types';
import SortReview from '../components/SortReview';

describe('SortReview', () => {
  it('renders a component', async () => {
    const currentSorting = INITIAL_SORTING;
    const setCurrentSorting = jest.fn();

    render(
      <CurrentSortingContext.Provider value={{ currentSorting, setCurrentSorting }}>
        <SortReview/>
      </CurrentSortingContext.Provider>
    );

    const label = await screen.findByTestId('filter-reviews');
    expect(label.getAttribute('data-sort-direction')).toStrictEqual('');
  });

  it('renders selected sort option with desc value', async () => {
    const currentSorting: Sorting = {
      ...INITIAL_SORTING,
      byReviews: 'desc',
    };
    const setCurrentSorting = jest.fn();

    render(
      <CurrentSortingContext.Provider value={{ currentSorting, setCurrentSorting }}>
        <SortReview/>
      </CurrentSortingContext.Provider>
    );

    const label = await screen.findByTestId('filter-reviews');
    expect(label.getAttribute('data-sort-direction')).toStrictEqual('desc');
  });

  it('renders selected sort option with asc value', async () => {
    const currentSorting: Sorting = {
      ...INITIAL_SORTING,
      byReviews: 'asc',
    };
    const setCurrentSorting = jest.fn();

    render(
      <CurrentSortingContext.Provider value={{ currentSorting, setCurrentSorting }}>
        <SortReview/>
      </CurrentSortingContext.Provider>
    );

    const label = await screen.findByTestId('filter-reviews');
    expect(label.getAttribute('data-sort-direction')).toStrictEqual('asc');
  });

  it('should call setCurrentSorting', async () => {
    const currentSorting: Sorting = {
      ...INITIAL_SORTING,
      byReviews: 'asc',
    };
    const setCurrentSorting = jest.fn();

    render(
      <CurrentSortingContext.Provider value={{ currentSorting, setCurrentSorting }}>
        <SortReview/>
      </CurrentSortingContext.Provider>
    );

    fireEvent.click(screen.getByTestId('filter-reviews'));

    expect(setCurrentSorting).toHaveBeenCalled();
    expect(setCurrentSorting.mock.calls[0][0].byReviews).toStrictEqual('desc');
  });
});

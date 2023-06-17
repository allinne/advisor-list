import { render, screen, fireEvent } from '@testing-library/react';
import { INITIAL_FILTERING, LANGUAGES } from '../constants';
import { CurrentFilteringContext } from '../contexts/index';
import FilterLanguage from '../components/FilterLanguage';

describe('FilterLanguage', () => {
  it('renders a component', async () => {
    const currentFiltering = INITIAL_FILTERING;
    const setCurrentFiltering = jest.fn();

    render(
      <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
        <FilterLanguage/>
      </CurrentFilteringContext.Provider>
    );

    const options = screen.getAllByTestId('select-language-option');
    expect((options[0] as HTMLOptionElement).selected).toBeTruthy();
  });

  it('renders selected not default option', async () => {
    const currentFiltering = {
      ...INITIAL_FILTERING,
      language: LANGUAGES[1],
    };
    const setCurrentFiltering = jest.fn();

    render(
      <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
        <FilterLanguage/>
      </CurrentFilteringContext.Provider>
    );

    const options = screen.getAllByTestId('select-language-option');
    expect((options[2] as HTMLOptionElement).selected).toBeTruthy();
  });

  it('should call setCurrentFiltering', async () => {
    const currentFiltering = INITIAL_FILTERING;
    const setCurrentFiltering = jest.fn();

    render(
      <CurrentFilteringContext.Provider value={{ currentFiltering, setCurrentFiltering }}>
        <FilterLanguage/>
      </CurrentFilteringContext.Provider>
    );

    fireEvent.change(screen.getByTestId('select-language'), { target: { value: 1 } });

    expect(setCurrentFiltering).toHaveBeenCalled();
  });
});

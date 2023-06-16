import { useContext } from 'react';
import { CurrentSortingContext } from '../contexts/index';

function SortingPanel() {
  const { currentSorting, setCurrentSorting } = useContext(CurrentSortingContext);

  const handleButtonClick = () => {
    const sortByReviews = currentSorting.byReviews === 'desc' ? 'asc' : 'desc';
    setCurrentSorting({ ... currentSorting, byReviews: sortByReviews });
  };

  const handleResetButtonClick = () => {
    setCurrentSorting({ ... currentSorting, byReviews: '' });
  };

  let text = '';
  if (currentSorting.byReviews === 'desc') {
    text = 'most popular';
  } else if (currentSorting.byReviews === 'asc') {
    text = 'less popular';
  }

  return (
    <>
      <button onClick={() => handleButtonClick()}>
        Sort by review: {text}
      </button>
      <button onClick={() => handleResetButtonClick()}>
        Reset
      </button>
    </>
  )
}

export default SortingPanel

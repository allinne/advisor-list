import { useContext } from 'react';
import { CurrentSortingContext } from '../contexts/index';

function SortReview() {
  const { currentSorting, setCurrentSorting } = useContext(CurrentSortingContext);

  const handleButtonClick = () => {
    const sortByReviews = currentSorting.byReviews === 'desc' ? 'asc' : 'desc';
    setCurrentSorting({ ... currentSorting, byReviews: sortByReviews });
  };

  let text = '';
  if (currentSorting.byReviews === 'desc') {
    text = 'most popular';
  } else if (currentSorting.byReviews === 'asc') {
    text = 'least popular';
  }

  return (
    <div onClick={() => handleButtonClick()}>
      reviews {text}
    </div>
  )
}

export default SortReview

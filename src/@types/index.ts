import { Dispatch, SetStateAction } from "react";

export type Advisor = {
  id: number,
  name: string,
  isOnline: boolean,
  language: string,
  reviewNumber: number,
}

export type SortingType = '' | 'asc' | 'desc';
export type Sorting = {
  byReviews: SortingType,
  byName: SortingType,
};

export type CurrentSortingContextType = {
  currentSorting: Sorting,
  setCurrentSorting: Dispatch<SetStateAction<Sorting>>
}

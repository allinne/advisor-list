import { Dispatch, SetStateAction } from "react";

export enum AvailabilityStatus {
  'default' = 0,
  'online' = 1,
  'offline' = 2,
}

export type Advisor = {
  id: string,
  name: string,
  status: AvailabilityStatus,
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
  setCurrentSorting: Dispatch<SetStateAction<Sorting>>,
}

export type Filtering = {
  status: AvailabilityStatus,
  language: string,
};

export type CurrentFilteringContextType = {
  currentFiltering: Filtering,
  setCurrentFiltering: Dispatch<SetStateAction<Filtering>>,
}

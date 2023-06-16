import { Sorting, Filtering, AvailabilityStatus } from '../@types';

export const INITIAL_SORTING: Sorting = {
  byReviews: '',
  byName: '',
}

export const INITIAL_FILTERING: Filtering = {
  status: AvailabilityStatus.default,
  language: '',
}

export const LANGUAGES = ['English', 'German', 'Spanish'];

export const AVAILABILITY_STATUS_LIST = Object.values(AvailabilityStatus).filter(el => isNaN(Number(el)));

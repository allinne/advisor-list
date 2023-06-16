import { createContext } from 'react';
import { CurrentSortingContextType, CurrentFilteringContextType } from '../@types';

export const CurrentSortingContext = createContext<CurrentSortingContextType>({} as CurrentSortingContextType);
export const CurrentFilteringContext = createContext<CurrentFilteringContextType>({} as CurrentFilteringContextType);

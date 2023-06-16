import { createContext } from 'react';
import { CurrentSortingContextType } from '../@types';

export const CurrentSortingContext = createContext<CurrentSortingContextType>({} as CurrentSortingContextType);

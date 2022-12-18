import { createContext } from 'react';
import { TopLevelCategory } from '../models/IPage';
import { IContext } from './IContext';

export const Context = createContext<IContext>({ menu: [], firstCategory: TopLevelCategory.Courses })
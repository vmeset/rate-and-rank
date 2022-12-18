import { IMenuItem } from "../models/IMenu";
import { TopLevelCategory } from "../models/IPage";

export interface IContext {
    menu: IMenuItem[],
    setMenu?: () => void,
    firstCategory: TopLevelCategory
}
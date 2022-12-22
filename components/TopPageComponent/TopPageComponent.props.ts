import { IMenuItem } from "../../models/IMenu";
import { ETopLevelCategory, IPage } from "../../models/IPage";
import { IProduct } from "../../models/IProduct";

export interface TopPageComponentProps {
    menu: IMenuItem[],
    firstCategory: ETopLevelCategory,
    page: IPage,
    products: IProduct[]
}

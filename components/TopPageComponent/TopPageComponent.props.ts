import { ETopLevelCategory, IPage } from "../../models/IPage";
import { IProduct } from "../../models/IProduct";

export interface TopPageComponentProps {
    firstCategory: ETopLevelCategory,
    page: IPage,
    products: IProduct[]
}

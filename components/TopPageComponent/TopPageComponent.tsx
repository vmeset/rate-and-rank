import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css'

export const TopPageComponent = ({menu, firstCategory, products, page}: TopPageComponentProps): JSX.Element => {
    return (
        <div>
            {products && products.length}
        </div>
    )
}
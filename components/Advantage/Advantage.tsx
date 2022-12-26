import { AdvantageProps } from "./Advantage.props";
import cn from 'classnames'
import styles from './Advantage.module.css'
import Done from './done.svg'
import { Htag } from "../Htag/Htag";
import { Typography } from "../Typography/Typography";

export const Advantage = ({advantages}: AdvantageProps): JSX.Element => {
    return (
        <div className={styles.advantageBlock}>
            {advantages && advantages?.map(adv => (
                <div key={adv._id}>
                    <div className={styles.advantageItem}>
                        <Done />
                        <Htag tag="h3">{adv.title}</Htag>
                    </div>
                    <div className={styles.description}>
                        <Typography>{adv.description}</Typography>
                    </div>
                </div>
            ))}
        </div>
    );
}
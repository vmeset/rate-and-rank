import { FC } from "react";
import { HHProps } from "./HH.props";
import styles from './HH.module.css'
import cn from 'classnames'
import { Card } from "../Card/Card";
import RateIcon from './ghostStar.svg'
import { priceRu } from "../../helpers/helpers";

export const HH: FC<HHProps> = ({count, juniorSalary, middleSalary, seniorSalary}): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>JUNIOR</div>
                    {/* <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div> */}
                    <div className={styles.salaryValue}>{juniorSalary}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>MIDDLE</div>
                    {/* <div className={styles.salaryValue}>{priceRu(middleSalary)}</div> */}
                    <div className={styles.salaryValue}>{middleSalary}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>SENIOR</div>
                    {/* <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div> */}
                    <div className={styles.salaryValue}>{seniorSalary}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>
)};
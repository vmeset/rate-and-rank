import { FC, useState } from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css'
import cn from 'classnames'
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from './close.svg'

export const ReviewForm: FC<ReviewFormProps> = ({productId, className, ...props}): JSX.Element => {

    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    return (
        <div {...props} className={cn(styles.reviewForm, className)}>
            <Input />
            <Input />
            <div className={styles.rating}>
                <span>Оценка:</span>
                <Rating rating={0} />
            </div>
            <Textarea />
            <div className={styles.submit}>
                <Button apearance="primary">
                    Отправить
                </Button>
                <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)} role="alert">
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после проверки.
				</div>
				<button
					onClick={() => setIsSuccess(false)}
					className={styles.close}
					aria-label="Закрыть оповещение"
				>
					<CloseIcon />
				</button>
			</div>}
			{error && <div className={cn(styles.error, styles.panel)} role="alert">
				Что-то пошло не так, попробуйте обновить страницу
				<button
					onClick={() => setError(undefined)}
					className={styles.close}
					aria-label="Закрыть оповещение"
				>
					<CloseIcon />
				</button>
			</div>}
        </div>
    );
};
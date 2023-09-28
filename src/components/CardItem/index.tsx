import styles from './styles.module.css';

import checkedSVG from '@assets/checked.svg';
import uncheckedSVG from '@assets/unchecked.svg';
import trashSVG from '@assets/trash.svg';

import { TaskDTO } from '@DTO/TaskDTO';

type Props = {
    data: TaskDTO,
    onCheck: () => void,
    onDelete: () => void,
}

export default function CardItem({ data, onCheck, onDelete }: Props) {
    return (
        <div className={
            `${styles.container} 
            ${data.isCompleted ? styles.completed : styles.not_completed}`}
        >
            <div
                className={styles.check}
                onClick={onCheck}
            ><img
                className={styles.check_icon} 
                src={data.isCompleted ? checkedSVG : uncheckedSVG} alt=""
            />
            </div>

            <p>{ data.description }</p>

            <div
                className={styles.delete}
                onClick={onDelete}
            ><img
                className={styles.delete_icon} 
                src={trashSVG} alt=""
            />
            </div>
        </div>
    )
}
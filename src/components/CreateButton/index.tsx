import styles from './styles.module.css';
import { BiPlusCircle } from 'react-icons/bi';

type Props = {
    onClick: () => void,
}

export default function CreateButton({ onClick }: Props) {
    return (
        <button
            className={styles.container}
            onClick={onClick}
        >
            Criar<BiPlusCircle className={styles.icon} />
        </button>
    )
}
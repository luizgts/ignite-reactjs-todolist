import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ ...rest }: Props) {
    return (
        <input
            className={styles.container}
            type="text"
            placeholder="Adicione uma nova tarefa"
            {...rest}
        />
    )
}
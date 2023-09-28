import styles from './styles.module.css';

type Props = {
    value: string | number;
}

export default function Badge({ value }: Props) {
    return (
        <span className={styles.container}>{ value }</span>
    )
}
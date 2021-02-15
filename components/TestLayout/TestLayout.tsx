import styles from './TestLayout.module.scss';

export default function TestLayout(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}
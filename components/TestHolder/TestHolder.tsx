import React from 'react';
import styles from './TestHolder.module.scss';

type TestHolderProps = {
    name: string;
    expected: any;
    result: any;
};

export default function TestHolder(props: TestHolderProps) {
    const style = {
        marginBottom: '10px'
    };

    return (
        <div className={styles.testHolder}>
            <div className={styles.title}>{`${props.name}:`}</div>
            <div className={styles.secondTitle}>Expected:</div>
            <div style={style}>{props.expected}</div>
            <div className={styles.secondTitle}>Result:</div>
            <div className={props.expected === props.result ? styles.success: styles.failure}>{props.result}</div>
        </div>
    );
}
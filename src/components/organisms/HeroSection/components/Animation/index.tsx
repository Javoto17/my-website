import React from 'react';

import styles from './styles.module.css';

const Animation = () => {
    return (
        <div>
            <div className={styles['objects']}>
                <div className={styles['objects_computer']}></div>
                <div className={styles['objects_table']}></div>
                <div className={styles['objects_cup']}></div>
                <div className={styles['smoke']}></div>
                <div className={styles['objects_chair']}></div>
            </div>
            <div className={styles['box']}>
                <div className={styles['box_1']}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles['box_2']}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles['box_3']}></div>
            </div>
        </div>
    );
};

export default Animation;

import React from 'react'
import * as styles from './banner.module.css'

export default function banner(props) {
    return (
        <div className={styles.notification}>
            <p>{props.notification}</p>
        </div>
    )
}


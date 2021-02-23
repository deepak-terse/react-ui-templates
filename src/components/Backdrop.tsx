import React, { Component } from 'react'
import styles from '../styles/SidePanel.module.scss';

export default function Backdrop(props: any) {
    return <div 
        className={styles.backdrop} 
        onClick={props.close}
    />
}
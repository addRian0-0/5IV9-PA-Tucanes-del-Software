import React from 'react'
import MainHead from '../components/MainHead';
import LayoutIndex from '../components/Lateral';
import Lateral from '../components/Lateral';
import styles from "../styles/Home.module.css";
export default function Menu(){

    return(
        <div>
        <MainHead tituloPestana="Inicio" />
        <div className={styles.container_0}>
        <Lateral/>
        </div>
        </div>

    )

}
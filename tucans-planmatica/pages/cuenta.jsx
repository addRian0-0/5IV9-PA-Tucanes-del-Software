import React from 'react'
import MainHead from '../components/MainHead';
import Menusup from '../components/HeaderM';
import styles from "../styles/Home.module.css";
export default function MiCuenta(){

    return(
        <div>
        <MainHead tituloPestana="Mi Cuenta" />
        <Menusup/>
        <div className={styles.container0}>
                
            </div>
        </div>

    )

}
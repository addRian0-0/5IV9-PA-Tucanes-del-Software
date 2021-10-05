import React from 'react'
import MainHead from '../components/MainHead';

import Lateral from '../components/Lateral';
import styles from "../styles/Home.module.css";

export default function MiCuenta(){

    return(
        <div >
        <MainHead tituloPestana="Configuración" />
            <div className={styles.fullContainer}>
                <div>
                <Lateral/>
                </div>

                <div className={styles.appContainer}>
                
                <div className={styles.head_Page}>
                <font face="Work Sans" color="white">
                    <h3>× Configuración</h3>
                </font>
                </div>
                <div className={styles.finalC}>
                    Ola
                </div>


                </div>
            </div>
        </div>

    )

}
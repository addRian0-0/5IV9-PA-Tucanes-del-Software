import React from 'react';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainHead from '../components/MainHead';

export default function Lateral(){
    return(

        <div>
            <MainHead tituloPestana="Menú Principal" />
            <div className={styles.lateral}>
                ola
            </div>
        </div>
    )
}
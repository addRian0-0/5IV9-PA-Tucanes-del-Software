import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Menu.module.css";
import MainHead from './MainHead';
import logo_1_w from "../src/logo_1_w.png";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function menusup(){

    return(

        <div>
        <MainHead tituloPestana="Inicio"/>    
        <font face="Work Sans" color="white">
        <div className={styles.head}>
            <p>XD</p>
            
            <p>XD</p>
            

        </div>
        
        </font>
    </div>
        
    )

}
/*

            <div className={styles.lateral_logo}>
            <Image src={logo_1_w} width={'220vw'} height={'87vw'}  /><br/>
            <h2 className={styles.t_plantmatica}>PlantMatica</h2>
            <Link href="menu"><button className={styles.pages}>Inicio</button></Link><br/>
            <Link href="cuenta"><button className={styles.pages}>Mi Cuenta</button></Link><br/>
            <Link href="config"><button className={styles.pages}>Configuración</button></Link><br/>
            <a href="/"><button className={styles.pages} onClick={handleToggle}>Cerrar Sesión</button></a><br/>
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            </div>

*/
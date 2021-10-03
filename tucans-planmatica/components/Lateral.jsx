import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import MainHead from '../components/MainHead';
import logo_1_w from "../src/logo_1_w.png";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export default function Lateral(){
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return(

        <div>
            <MainHead tituloPestana="Menú Principal" />
            <font face="Work Sans" color="white">
            <div className={styles.lateral}>
                
                <div className={styles.lateral_logo}>
                <Image src={logo_1_w} width={'220%'} height={'87%'}  /><br/><br/>
                <Link href="menu"><button className={styles.pages}>Inicio</button></Link><br/>
                <Link href="menu"><button className={styles.pages}>Mi Cuenta</button></Link><br/>
                <Link href="menu"><button className={styles.pages}>Configuración</button></Link><br/>
                <a href="/"><button className={styles.pages} onClick={handleToggle}>Cerrar Sesión</button></a><br/>
                <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>

                </div>
            </div>
            </font>
        </div>
    )
}
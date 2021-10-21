import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Menu.module.css";
import MainHead from './MainHead';
import logo_1_w from "../src/logo_1_w.png";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function menusup(){

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    return(

        <div>
        <MainHead tituloPestana="Inicio"/>    
        <font face="Work Sans" color="white">
        <div className={styles.head}>
            <div>
            <br/><Link href="menu"><Image src={logo_1_w} width={'188%'} height={'70%'}  /></Link>
            </div>
            <div className={styles.botonera}>
            <Link href="menu"><button className={styles.menuButton}><font face="Work Sans" color="white"><h3>Inicio</h3></font></button></Link>
            <Link href="cuenta"><button className={styles.menuButton}><font face="Work Sans" color="white"><h3>Mi Cuenta</h3></font></button></Link>
            <Link href="cuenta"><button className={styles.menuButton}><font face="Work Sans" color="white"><h3>Configuración</h3></font></button></Link>
            <Link href="cuenta"><button className={styles.menuButton} onClick={handleToggle}><font face="Work Sans" color="white"><h3>Cerrar Sesión</h3></font></button></Link>
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

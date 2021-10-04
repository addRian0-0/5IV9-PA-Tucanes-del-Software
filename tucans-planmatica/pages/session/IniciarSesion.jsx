import React from 'react';
import LayoutIndex from '../../components/LayoutIndex';
import MainHead from '../../components/MainHead';
import styles from "../../styles/Forms.module.css";
import Link from 'next/link';
export default function IniciarSesion() {
    return (
        <div>
            
            <MainHead tituloPestana="Iniciar Sesion" />
            <LayoutIndex>
            <form className={styles.root} >
                <center><h2 className={styles.title} >Iniciar Sesion</h2></center>
                <br/><br/>
                <div className={styles.cont_input}>
                    <label className={styles.text} >Nombre de usuario o correo</label>
                    <input className={styles.input} />
                </div>
                <div className={styles.cont_input}>
                    <label className={styles.text} >Contraseña</label>
                    <input type="password" className={styles.input} />
                </div><br/><br/>
                <Link href="../menu">
                <button className={styles.btnSubmit} type="submit">Iniciar Sesion</button>
                </Link>
            </form>
            </LayoutIndex>
        </div>
    )
}

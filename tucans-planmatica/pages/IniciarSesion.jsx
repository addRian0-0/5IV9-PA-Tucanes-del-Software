import React from 'react';
import styles from "../styles/Forms.module.css";
import MainHead from '../components/MainHead';
import LayoutIndex from '../components/LayoutIndex';
export default function IniciarSesion() {
    return (
        <div>
            <MainHead tituloPestana="Crear Cuenta" />
            <LayoutIndex>
            <form className={styles.root} >
                <h2 className={styles.title} >Iniciar Sesion</h2>

                <div className={styles.cont_input}>
                    <label className={styles.text} >Nombre de usuario o correo</label>
                    <input className={styles.input} />
                </div>
                <div className={styles.cont_input}>
                    <label className={styles.text} >Contraseña</label>
                    <input type="password" className={styles.input} />
                </div><br/><br/><br/><br/>
                <button className={styles.btnSubmit} type="submit">Iniciar Sesion</button>

            </form>
            </LayoutIndex>
        </div>
    )
}

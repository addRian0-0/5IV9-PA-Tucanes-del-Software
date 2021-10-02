import React from 'react';
import LayoutIndex from '../../components/LayoutIndex';
import MainHead from '../../components/MainHead';
import styles from "../../styles/Forms.module.css";

export default function IniciarSesion() {
    return (
        <div>
            <MainHead title="Iniciar Sesion" />
            <LayoutIndex>
            <form className={styles.root} >
                <h2 className={styles.title} ><a href="/">←</a>Iniciar Sesion</h2>

                <div className={styles.cont_input}>
                    <label className={styles.text} >Nombre de usuario o correo</label>
                    <input className={styles.input} />
                </div>
                <div className={styles.cont_input}>
                    <label className={styles.text} >Contraseña</label>
                    <input type="password" className={styles.input} />
                </div>
                <button className={styles.btnSubmit} type="submit">Iniciar Sesion</button>

            </form>
            </LayoutIndex>
        </div>
    )
}

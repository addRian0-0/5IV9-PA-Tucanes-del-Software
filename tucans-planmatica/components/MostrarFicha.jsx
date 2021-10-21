import React from 'react'
import styles from "../styles/Fichas.module.css";

export default function MostrarFicha() {
    return (
        <div>
            <table className={styles.tableFichas} >
                <thead><tr>Fichas sobre: {'Informacion'}</tr></thead>
                <tbody>
                    <tr>
                        Hola1
                    </tr>
                    <tr>
                        Hola12
                    </tr>
                    <tr>
                        Hola3
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

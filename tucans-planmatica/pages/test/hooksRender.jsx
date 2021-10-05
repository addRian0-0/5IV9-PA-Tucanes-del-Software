import React from 'react';
import { useState  } from 'react';
import styles from "../../styles/Forms.module.css";

export default function hooksRender() {

    //Esto es un hook 'hook' es el estado, 'setHook'
    //useState(*valor inicial del estado sera true*)
    const [hook, setHook] = useState(true);

    const cambiarEstado = () => {
        if(hook){
            setHook(false)
        }else{
            setHook(true)
        }
    }

    return (
        <div>
            <button onClick={cambiarEstado} className={styles.btnSubmit} >Cambiar estado</button>
            {/* Renderizado condicional (usar operadores ternarios)
            Dependiendo el estado dependera el renderizado, que cambia al hacer click*/}
            {
                hook  === true ? <p>Hola uwu (true)</p> : <p>Adios unu (false)</p>
            }
        </div>
    )
}

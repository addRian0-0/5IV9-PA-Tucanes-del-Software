import React from 'react'
import Image from 'next/image';
import MainHead from '../components/MainHead';
import LayoutIndex from '../components/LayoutIndex';
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div>
      <MainHead tituloPestana="Bienvenido a PlantMatica" />
      <LayoutIndex>
        <font size={4} face="Work Sans">
          <div className={styles.container_1}>
            <font size={6} face="Work Sans" color="007200">
              <center><h1>Tucan's PlantMatica</h1></center>
            </font>
            <center>
              <div className={styles.container_3}>
                <h3>Bienvenido a PlantMatica, un sitio ideal para conocer más sobre herbolaria en México.<br />
                  Haznos saber qué buscas y la información llegará volando.</h3>
                <center>
                  <br />
                  <div className={styles.container_4}>
                    <a href="./session/CrearCuenta"><button className={styles.btnSubmit} type="submit">Crear Cuenta</button></a>
                    <a href="./session/IniciarSesion"><button className={styles.btnSubmit} type="submit">Iniciar Sesión</button></a>
                  </div>
                  <br />
                </center>
                <h3>

                </h3>
              </div>
            </center>
          </div>
        </font>
      </LayoutIndex>
    </div>
  )
}
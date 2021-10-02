import React from 'react'
import Image from 'next/image';
import MainHead from '../components/MainHead';
import LayoutIndex from '../components/LayoutIndex';
import styles from "../styles/Home.module.css";
import manzanilla from "../src/index_plant.png";
export default function Index() {
  return (
    <div>
      <MainHead tituloPestana="Bienvenido a PlantMatica" />
      <LayoutIndex>
        <font size={4} face="Work Sans">
          <div className={styles.container_1}>
<<<<<<< HEAD
          <font size={6} face="Work Sans" color="007200">
          <center><h1>Tucan's PlantMatica</h1></center>
          </font>
          <center>
            <div className={styles.container_3}>
              <h3>Bienvenido a PlantMatica, el sitio ideal para conocer sobre herbolaria en México.<br/>
              Haznos saber qué buscas y la información llegará volando.<br/><br/><br/></h3>
              <Image className={styles.index_img} src={manzanilla} width={'100vw'} height={'100vh'} />
            </div>
          </center>
=======
            <font size={6} face="Work Sans" color="007200">
              <center><h1>Tucan's PlantMatica</h1></center>
            </font>
            <center>
              <div className={styles.container_3}>
                <h3>Bienvenido a PlantMatica, el sitio ideal para conocer más sobre herbolaria en México.<br />
                  Haznos saber qué buscas y la información llegará volando.</h3>
                <center>
                  <br />
                  <div className={styles.container_4}>
                    <a href="CrearCuenta"><button className={styles.btnSubmit} type="submit">Crear Cuenta</button></a>
                    <a href="IniciarSesion"><button className={styles.btnSubmit} type="submit">Iniciar Sesión</button></a>
                  </div>
                  <br />
                </center>
                <h3>

                </h3>
              </div>
            </center>
>>>>>>> addRian
          </div>
        </font>
      </LayoutIndex>
    </div>
  )
}
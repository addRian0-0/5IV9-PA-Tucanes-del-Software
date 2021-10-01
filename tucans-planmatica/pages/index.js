import React from 'react'
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
          <font size={5} face="Work Sans" color="007200">
          <center><h1>Tucan's PlantMatica</h1></center>
          </font>
          <div className={styles.container_2}>
            <aside className={styles.aside_0}>Imagenes</aside>
            <div className={styles.container_3}>Texto wiiiiiiii</div>
            <aside className={styles.aside_0}>Más imagenes</aside>
          </div>
            
          </div>
        </font>
      </LayoutIndex>
    </div>
  )
}

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
          <font size={5} face="Work Sans" color="007200">
          <center><h1>Tucan's PlantMatica</h1></center>
          </font>
          <center>
            <div className={styles.container_3}>
              Bienvenido a PlantMatica, el sitio ideal para conocer sobre herbolaria en México.<br/>
              Haznos saber qué buscas y la información llegará volando.
              <Image className={styles.index_img} src={manzanilla}/>
            </div>
          </center>
          </div>
        </font>
      </LayoutIndex>
    </div>
  )
}

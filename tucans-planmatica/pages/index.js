import React from 'react'
import MainHead from '../components/MainHead';
import LayoutIndex from '../components/LayoutIndex';
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div>
      <MainHead tituloPestana="PlantsMatica | Inicio" />
      <LayoutIndex>
        <font size={4} face="Work Sans">
          <div className={styles.container_1}>
            <p>Ola we</p>
          </div>
        </font>
      </LayoutIndex>
    </div>
  )
}

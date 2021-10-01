import React from 'react'
import Image from 'next/image';
import MainHead from '../components/MainHead';
import LayoutIndex from '../components/LayoutIndex';
import styles from "../styles/Home.module.css";
import ip1 from "../src/index_plant.png";
import ip2 from "../src/index_plant2.png";
import ip3 from "../src/index_plant3.png";
import ip4 from "../src/index_plant4.png";
import ip5 from "../src/index_plant5.png";
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
              <h3>Bienvenido a PlantMatica, el sitio ideal para conocer sobre herbolaria en México.<br/>
              Haznos saber qué buscas y la información llegará volando.<br/><br/><br/></h3>
              
            <button>

            </button>

            </div>
          </center>
          </div>
        </font>
      </LayoutIndex>
    </div>
  )
}

/*

              <center>
              <div className={styles.container_4}>
              <table>
                <td>
                <Image className={styles.index_img} src={ip1} width={'130vw'} height={'110vh'} />
                </td>
                <td>
                  <Image className={styles.index_img} src={ip2} width={'130vw'} height={'110vh'} /> 
                </td>
                <td>
                <Image className={styles.index_img} src={ip3} width={'130vw'} height={'110vh'} />
                </td>
                <td>
                <Image className={styles.index_img} src={ip4} width={'130vw'} height={'110vh'} />
                </td>
                <td>
                <Image className={styles.index_img} src={ip5} width={'130vw'} height={'110vh'} />
                </td>
              </table>
              </div>
              </center>

*/
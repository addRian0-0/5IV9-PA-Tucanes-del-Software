import React from 'react'
import styles from "../styles/Forms.module.css";
import TerminosYCondiciones from "../components/TerminosYCondiciones";
import MainHead from '../components/MainHead';
import LayoutIndex from '../components/LayoutIndex';
export default function CrearCuenta() {
    
    return (
        

        
        <div>
            <MainHead tituloPestana="Crear Cuenta" />
            <LayoutIndex>
            <form className={styles.root} >
                <h2 className={styles.title} >  Crear cuenta</h2>

                <div className={styles.cont_input}>
                    <label className={styles.text} >Nombre de usuario</label>
                    <input className={styles.input} />
                </div>
                <div className={styles.cont_input}>
                    <label className={styles.text} >Correo</label>
                    <input className={styles.input} />
                </div>
                <div className={styles.cont_input}>
                    <label className={styles.text} >Contraseña</label>
                    <input type="password" className={styles.input} />
                </div>
                <div className={styles.cont_input}>
                    <label className={styles.text} >Verificar contraseña</label>
                    <input type="password" className={styles.input} />
                </div>
                <div className={styles.cont_input}>
                    <label className={styles.text} >Estado de la republica</label>
                    <select className={styles.input} name="estado">
                        <option value="no">Seleccione uno...</option>
                        <option value="no">Resido fuera del pais</option>
                        <option value="Aguascalientes">Aguascalientes</option>
                        <option value="Baja California">Baja California</option>
                        <option value="Baja California Sur">Baja California Sur</option>
                        <option value="Campeche">Campeche</option>
                        <option value="Chiapas">Chiapas</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="CDMX">Ciudad de México</option>
                        <option value="Coahuila">Coahuila</option>
                        <option value="Colima">Colima</option>
                        <option value="Durango">Durango</option>
                        <option value="Estado de México">Estado de México</option>
                        <option value="Guanajuato">Guanajuato</option>
                        <option value="Guerrero">Guerrero</option>
                        <option value="Hidalgo">Hidalgo</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="Michoacán">Michoacán</option>
                        <option value="Morelos">Morelos</option>
                        <option value="Nayarit">Nayarit</option>
                        <option value="Nuevo León">Nuevo León</option>
                        <option value="Oaxaca">Oaxaca</option>
                        <option value="Puebla">Puebla</option>
                        <option value="Querétaro">Querétaro</option>
                        <option value="Quintana Roo">Quintana Roo</option>
                        <option value="San Luis Potosí">San Luis Potosí</option>
                        <option value="Sinaloa">Sinaloa</option>
                        <option value="Sonora">Sonora</option>
                        <option value="Tabasco">Tabasco</option>
                        <option value="Tamaulipas">Tamaulipas</option>
                        <option value="Tlaxcala">Tlaxcala</option>
                        <option value="Veracruz">Veracruz</option>
                        <option value="Yucatán">Yucatán</option>
                        <option value="Zacatecas">Zacatecas</option>
                    </select>
                </div>

                <div className={styles.cont_input}>
                    <label className={styles.text} >Sexo</label>
                    <select className={styles.input} name="sexo">
                        <option value="Masculino" >Masculino</option>
                        <option value="Femenino" >Femenino</option>
                        <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                    </select>
                </div>

                <div className={styles.cont_input} >
                    <label className={styles.text} >Edad</label>
                    <input type="text" className={styles.input} />
                </div>
                <div style={{marginLeft: '30px'}}>
                    <center><TerminosYCondiciones /></center>
                </div><br/>
                <button className={styles.btnSubmit} type="submit">Crear Cuenta</button>

            </form>
            </LayoutIndex>
        </div>
        
    )
}

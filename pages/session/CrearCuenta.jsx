import React from 'react'
import styles from "../../styles/Forms.module.css";
import TerminosYCondiciones from "../../components/TerminosYCondiciones";
import MainHead from '../../components/MainHead';
import LayoutIndex from '../../components/LayoutIndex';
import Link from 'next/link';
import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCrearCuenta } from "../../schemas/crearCuenta";
import swal from "sweetalert";

export default function CrearCuenta() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaCrearCuenta)
    });
    const onSubmit = async (data) => {
        const res = await fetch(`http://localhost:8080/user`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username,
                correo: data.correo,
                password: data.password,
                estadoMx: data.estadoMx,
                sexo: data.sexo,
                edad: data.edad
            })
        });
        const resJSON = await res.json();
        if (resJSON.errors) {
            let arrayErrors = resJSON.errors;
            arrayErrors.forEach(e => {
                swal({
                    title: 'Error al crear cuenta',
                    text: e.msg,
                    icon: 'error',
                    button: 'Ok',
                })
            });
        } else {
            swal({
                title: 'Finalizado',
                text: resJSON.msg,
                icon: 'success',
                button: 'Ok',
                timer: '3000'
            });
            Router.push('/session/IniciarSesion');
        }
    }

    return (

        <div>
            <MainHead tituloPestana="Crear Cuenta" />
            <LayoutIndex>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.root} >

                    <h2 className={styles.title} >Crear cuenta</h2>

                    <div className={styles.cont_input}>
                        <label className={styles.text} >Nombre de usuario</label>
                        <input {...register('username')} className={styles.input} />
                        <p className={styles.errors} >{errors.username?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Correo</label>
                        <input {...register('correo')} className={styles.input} />
                        <p className={styles.errors} >{errors.correo?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Contrase??a</label>
                        <input {...register('password')} type="password" className={styles.input} />
                        <p className={styles.errors} >{errors.password?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Verificar contrase??a</label>
                        <input {...register('passwordV')} type="password" className={styles.input} />
                        <p className={styles.errors} >{errors.passwordV?.message}</p>
                    </div>
                    <div className={styles.cont_input}>
                        <label className={styles.text} >Estado de la republica</label>
                        <select {...register('estadoMx')} className={styles.input} name="estado">
                            <option value="no">Seleccione uno...</option>
                            <option value="Resido fuera del pais">Resido fuera del pais</option>
                            <option value="Aguascalientes">Aguascalientes</option>
                            <option value="Baja California">Baja California</option>
                            <option value="Baja California Sur">Baja California Sur</option>
                            <option value="Campeche">Campeche</option>
                            <option value="Chiapas">Chiapas</option>
                            <option value="Chihuahua">Chihuahua</option>
                            <option value="CDMX">Ciudad de M??xico</option>
                            <option value="Coahuila">Coahuila</option>
                            <option value="Colima">Colima</option>
                            <option value="Durango">Durango</option>
                            <option value="Estado de M??xico">Estado de M??xico</option>
                            <option value="Guanajuato">Guanajuato</option>
                            <option value="Guerrero">Guerrero</option>
                            <option value="Hidalgo">Hidalgo</option>
                            <option value="Jalisco">Jalisco</option>
                            <option value="Michoac??n">Michoac??n</option>
                            <option value="Morelos">Morelos</option>
                            <option value="Nayarit">Nayarit</option>
                            <option value="Nuevo Le??n">Nuevo Le??n</option>
                            <option value="Oaxaca">Oaxaca</option>
                            <option value="Puebla">Puebla</option>
                            <option value="Quer??taro">Quer??taro</option>
                            <option value="Quintana Roo">Quintana Roo</option>
                            <option value="San Luis Potos??">San Luis Potos??</option>
                            <option value="Sinaloa">Sinaloa</option>
                            <option value="Sonora">Sonora</option>
                            <option value="Tabasco">Tabasco</option>
                            <option value="Tamaulipas">Tamaulipas</option>
                            <option value="Tlaxcala">Tlaxcala</option>
                            <option value="Veracruz">Veracruz</option>
                            <option value="Yucat??n">Yucat??n</option>
                            <option value="Zacatecas">Zacatecas</option>
                        </select>
                    </div>

                    <div className={styles.cont_input}>
                        <label className={styles.text} >Sexo</label>
                        <select {...register('sexo')} className={styles.input} name="sexo">
                            <option value="Masculino" >Masculino</option>
                            <option value="Femenino" >Femenino</option>
                            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                        </select>
                    </div>

                    <div className={styles.cont_input} >
                        <label className={styles.text} >Edad</label>
                        <input {...register('edad')} type="text" className={styles.input} />
                        <p className={styles.errors} >{errors.edad ? "Dato no valido" : ""}</p>
                    </div><br />
                    <div>
                        <center><TerminosYCondiciones /></center>
                    </div><br />
                    <button type="submit" className={styles.btnSubmit} type="submit">Crear Cuenta</button>
                </form>
            </LayoutIndex>
        </div>

    )
}
import React from 'react';
import LayoutIndex from '../components/LayoutIndex';
import MainHead from '../components/MainHead';

/* Los estilos en next/react se usan a traves de modulos
para aplicarlos se deben importar desde la carpeta styles y se le puede
asignar cualquier nombre en este caso sera 'stylesC' 
NOTA: SIEMPRE DEBEN LLEVAR LA CONSTRUCCION DEL NOMBRE DE ARCHIVO  DE LA SIGUINETE MANERA: 
(nombrearchivo.module.css), si no lleva esa estructura de nombre habra errores*/
import stylesC from "../styles/CrearCuenta.module.css";

/* Estilos importados de la libreria de bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

export default function CrearCuenta() {
    return (
        <div>
            {/* MainHead representa la forma de crear encabezados en react y next */}
            <MainHead tituloPestana="PlantsMatica | Crear cuenta" />
            <LayoutIndex>
                {/* Las sintaxis de algunos elementos html en react cambian como
                al momento de definir clases: 
                <div class="lorem" >lorem</div>
                Cambiaria al atributo className
                <div className="lorem" >lorem</div> 
                Para aplicar estilos propios de archivos que ya hemos importado 'stylesC' seria: */}
                <div className={stylesC.form_container} >
                    <form className={stylesC.form} >
                        <h2 className={stylesC.h2} >Crear cuenta</h2>

                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>

                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Nombre de usuario</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>

                        <div className="input-group mb-3">
                            <select className="form-select" id="inputGroupSelect04" >
                                <option selected>Sexo...</option>
                                <option >Masculino</option>
                                <option >Prefiero no decirlo</option>
                            </select>
                        </div>

                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Correo eletronico</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>

                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Contrasena </span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>

                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Verificar Contrasena </span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>

                        <button type="submit m-2" className="btn btn-success">Success</button>
                    </form>
                </div>
            </LayoutIndex>
        </div>
    )
}

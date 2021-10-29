import React, { useState } from 'react'
import EditarUsuario from '../../components/EditarUsuario.test'
import VisualizarUsuario from '../../components/VisualizarUsuario.test'
import LayoutMenu from "../../components/LayoutMenu";

export default function index() {
    
    //Hook para vista dependiendo xd
    const [verUsuario, setVer] = useState(true);

    const cambiarEstado = () => {
        verUsuario ? setVer(false) : setVer(true);
    }

    return (
        <LayoutMenu>
            {
                verUsuario ? <VisualizarUsuario evtBtn={cambiarEstado } /> : <EditarUsuario evtBtn={cambiarEstado }/>
            }
        </LayoutMenu>
    )
}

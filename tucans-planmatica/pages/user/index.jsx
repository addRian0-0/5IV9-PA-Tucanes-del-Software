import React, { useState } from 'react'
import EditarUsuario from '../../components/EditarUsuario.test'
import VisualizarUsuario from '../../components/VisualizarUsuario.test'

export default function index() {
    
    //Hook para vista dependiendo xd
    const [verUsuario, setVer] = useState(true);

    const cambiarEstado = () => {
        verUsuario ? setVer(false) : setVer(true);
    }

    return (
        <div>
            {
                verUsuario ? <VisualizarUsuario evtBtn={cambiarEstado } /> : <EditarUsuario evtBtn={cambiarEstado }/>
            }
        </div>
    )
}

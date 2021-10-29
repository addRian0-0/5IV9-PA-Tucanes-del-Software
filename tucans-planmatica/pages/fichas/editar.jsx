import React from 'react'
import EditarPlanta from '../../components/reqEdit';
import LayoutIndex from '../../components/LayoutIndex';
import LayoutMenu from "../../components/LayoutMenu";

export default function Ficha() {
    return (
        <div>
            
            <LayoutMenu>
                <EditarPlanta/>
            </LayoutMenu>
        </div>
    )
}

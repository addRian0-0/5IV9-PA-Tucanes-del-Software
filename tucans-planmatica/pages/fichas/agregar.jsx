import React from 'react'
import AgregarPlanta from '../../components/reqAdd';
import LayoutIndex from '../../components/LayoutIndex';
import LayoutMenu from "../../components/LayoutMenu";

export default function Ficha() {
    return (
        <div>
            
            <LayoutMenu>
                <AgregarPlanta/>
            </LayoutMenu>
        </div>
    )
}

import React from 'react'
import FichaUnica from '../../components/FichaUnica';
import LayoutIndex from '../../components/LayoutIndex';
import LayoutMenu from "../../components/LayoutMenu";
import MainHead from '../../components/MainHead';
export default function Ficha() {
    return (
        <div>
            <MainHead tituloPestana="Inicio" />
            <LayoutMenu>
                <FichaUnica/>
            </LayoutMenu>
        </div>
    )
}

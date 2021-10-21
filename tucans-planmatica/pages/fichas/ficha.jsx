import React from 'react'
import FichaUnica from '../../components/FichaUnica';
import LayoutIndex from '../../components/LayoutIndex';
import LayoutMenu from "../../components/LayoutMenu";

export default function Ficha() {
    return (
        <div>
            <LayoutMenu>
                <FichaUnica/>
            </LayoutMenu>
        </div>
    )
}

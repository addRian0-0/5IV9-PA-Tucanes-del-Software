import React from 'react';
import MainHead from '../../components/MainHead';
import LayoutIndex from '../../components/LayoutIndex';
import styles from "../../styles/Home.module.css";
import MostrarFicha from '../../components/MostrarFicha';

export default function Index() {
    return (
        <LayoutIndex>
            <MostrarFicha/>
        </LayoutIndex>
    )
}

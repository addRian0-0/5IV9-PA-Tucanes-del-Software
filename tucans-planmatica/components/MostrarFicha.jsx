import React from 'react'
import styles from "../styles/Fichas.module.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function MostrarFicha() {
    return (
        <div className={styles.tableFichas}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <h2 className={styles.titleficha} >Termino de busqueda: {`(AQUI)`}</h2>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Card >
                            <CardContent>
                                <div>
                                    <p className={styles.textFich} >Etiquetas: </p>
                                    <p className={styles.etiquetas} > {`Aqui vienen las etiquetas`} </p>
                                </div>
                                <p className={styles.titleficha} >{`Nombre comun`}</p>
                                <p className={styles.nombreC} >{`Nombre cientifico`}</p>
                                <p className={styles.textFich} >{`Descripcion`}</p>
                            </CardContent>
                            <CardActions>
                                <button className={styles.btnLinkFicha} >Mas informacion</button>
                            </CardActions>
                        </Card>
                        <Card >
                            <CardContent>
                                <div>
                                    <p className={styles.textFich} >Etiquetas: </p>
                                    <p className={styles.etiquetas} > {`apio`} </p>
                                    <p className={styles.etiquetas} > {`comestible`} </p>
                                    <p className={styles.etiquetas} > {`malestar estomacal`} </p>
                                    <p className={styles.etiquetas} > {`enfermedades respiratorias`} </p>
                                    <p className={styles.etiquetas} > {`diarrea`} </p>
                                </div>
                                <p className={styles.titleficha} >{`Apio.`}</p>
                                <p className={styles.nombreC} >{`Apium graveolens.`}</p>
                                <p className={styles.textFich} >{`Hierba bienal o perenne, esparcidamente ramificada, sin pelos.Mide de 30 cm a 1 m de alto.Tiene un tallo estriado longitudinalmente,  sus hojas son, de 3 a 25 cm de largo, compuestas con pocos foliolos (pinnadas), peciolos de base envainante, los foliolos son ovados u obovados, cuneados en la base, de 2 a 6 cm de largo por 1 a 5 cm de ancho, margen profundamente lobado o dentado; las hojas superiores más pequeñas que las inferiores y cortamente pecioladas o subsésiles...`}</p>
                            </CardContent>
                            <CardActions>
                                <button className={styles.btnLinkFicha} >Mas informacion</button>
                            </CardActions>
                        </Card>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

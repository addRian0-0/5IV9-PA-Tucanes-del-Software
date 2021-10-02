import React from 'react';
import MainHead from './MainHead';
import Image from "next/image";
import styles from "../styles/Home.module.css";

import logo_1_w from "../src/logo_1_w.png";
import git_logo from "../src/git_icon.png";

export default function LayoutIndex({ children }) {
    return (
        <>
            <div className={styles.container_0} style={{margin: '0', padding: '0'}} >
                <font face="Work Sans" color="white">
                    <header className={styles.head_0}>
                        <br/><Image src={logo_1_w} width={'200%'} height={'80%'}  />
                    </header>
                </font>
                { children }
                <font face="Work Sans" color="#FAFAFA">
                    <footer className={styles.footy}>
                        <table className={styles.footy_t}>
                            <tbody><tr>
                                <td className={styles.footy_t_1}>
                                    <a><h2>© 2021 Tucan's Software</h2></a>
                                </td>
                                <td className={styles.footy_t_2}>
                                    <a href="https://github.com/addRian0-0/5IV9-PA-Tucanes-del-Software" target="_blank">
                                        <Image src={git_logo} className={styles.git_logo} width={'50%'} height={'50%'}/>
                                    </a>
                                </td>
                            </tr>
                            </tbody></table>
                    </footer>
                </font>
            </div>
        </>
    )
}
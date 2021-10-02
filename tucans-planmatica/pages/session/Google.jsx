import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client';
import styles from "../../styles/Forms.module.css";
import GoogleIcon from '@mui/icons-material/Google';

export default function Google() {

    const [session, loadingSession] = useSession();

    if (loadingSession) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <button className={styles.btnGoogle} onClick={() => signIn()} >
                <GoogleIcon /> Crear cuenta con Google
            </button>
            {/* {!session && (
                <>
                    <button className={styles.btnSubmit} onClick={() => signIn()} >
                        <GoogleIcon/> Crear cuenta con Google 
                    </button>
                </>
            )} */}
            {/* {
                session && (
                    <>
                        <h4>You are logged as: {session.user.name} </h4>
                        <div>
                            <h4>Email: {session.user.email}</h4>
                            <br/>
                            {
                                session.user.image && (
                                    <span>
                                        <img src={session.user.image} alt={session.user.name} />
                                    </span>
                                )
                            }
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <button className={styles.btnSubmit} onClick={() => signOut() } > SingOut</button>
                    </>
                )
            } */}
        </div>
    )
}

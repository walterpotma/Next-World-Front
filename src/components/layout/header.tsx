"use client"
import styles from "./style.module.css";
import Image from 'next/image';

export default function Page(){
    return(
        <div>
            <header className={styles.header}>
                <div className={styles.logotipo}>
                    <Image
                    src="/logo_nw.png"
                    alt="Logo NW Comics"
                    width={60}
                    height={60}
                    />
                    <h1>NW Comics</h1>
                </div>
                <nav className={styles.navigation}>
                    <button>Home</button>
                </nav>
            </header>
        </div>
    )
}
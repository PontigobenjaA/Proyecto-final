import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../assets/icon.png'


const NavBar = () => {
    const location = useLocation()
    return (
        <div>
            <ul className={styles.container}>
                <li>
                    <img src={logo} alt=""/>
                </li>
                <li>
                    <Link className={styles.link} to={'now_playing'} style={{ color: location.pathname === '/home/now_playing' ? '#526D82' : undefined}}>En cartelera</Link>
                </li>
                <li>
                    <Link className={styles.link} to={'popular'} style={{ color: location.pathname === '/home/popular' ? '#526D82' : undefined}}>Populares</Link>
                </li>
                <li>
                    <Link className={styles.link} to={'top_related'} style={{ color: location.pathname === '/home/top_related' ? '#526D82' : undefined}}>Mejores calificadas</Link>
                </li>
                <li>
                    <Link className={styles.link} to={'upcomig'} style={{ color: location.pathname === '/home/upcomig' ? '#526D82' : undefined}}>Próximamente</Link>
                </li>
                <li>
                    <Link className={styles.link} to={'search'} style={{ color: location.pathname === '/home/search' ? '#526D82' : undefined}}>🔎 Buscar</Link>
                </li>
               
            </ul>
        </div>
    )
}

export default NavBar

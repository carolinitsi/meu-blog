import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

const Navbar = () => {
    const {user} = useAuthValue(); //context que pega o user logado
    const {logout} = useAuthentication();
    return (
        <nav className={styles.navbar}>
            <NavLink to="/meu-blog/" className={styles.brand}>
                Meu <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li ><NavLink to="/meu-blog/" className={({isActive}) => (isActive ? styles.active : "")} >Home</NavLink></li>
                {!user && (
                    <>
                        <li ><NavLink to="/meu-blog/register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastrar</NavLink></li>
                        <li ><NavLink to="/meu-blog/login" className={({isActive}) => (isActive ? styles.active : "")}>Entrar</NavLink></li>
                    </>
                )}
                <li ><NavLink to="/meu-blog/about" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink></li>
                {user && (
                    <>
                        <li ><NavLink to="/meu-blog/posts/create" className={({isActive}) => (isActive ? styles.active : "")}>Publish</NavLink></li>
                        <li ><NavLink to="/meu-blog/dashboard" className={({isActive}) => (isActive ? styles.active : "")}>Dashboard</NavLink></li>
                        <button onClick={logout}>Logout</button>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;
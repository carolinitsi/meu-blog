import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h3>Obrigada pela visita, volte sempre!</h3>
            <p>MeuBlog &copy; 2024</p>
        </footer>
    )
}

export default Footer;
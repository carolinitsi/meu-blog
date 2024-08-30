import React from "react";
import styles from "./Loader.module.css";
import icon from "../../assets/icons/loader.gif";

const Loader = () => {
    return (
        <div className={styles.container_loader}>
            <span className={styles.loader}></span>
        </div>
    )
}

export default Loader;
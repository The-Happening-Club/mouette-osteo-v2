import React from "react";
import styles from "@/css/components/Header.module.css";
import Image from "next/image";
import Logo from "@/assets/logo_circle.png";
import MenuIcon from "@/assets/hamburger-menu.png";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__branding}>
                <p className={styles.header__text}>Franck Mouette D.O</p>
            </div>
            <div className={styles.header__navigation}>
                <div className={styles.header__logo}>
                    <Image
                        src={Logo}
                        width={60}
                        height={60}
                        alt="Logo du Centre des deux mains"
                    />
                </div>
                <NavBar />
                <div className={styles.header__menuIcon}>
                    <Image
                        src={MenuIcon}
                        width={60}
                        height={60}
                        alt="Menu Icon"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header

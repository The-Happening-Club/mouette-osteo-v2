import React from "react";
import styles from "@/css/components/Header.module.css";
import Image from "next/image";
import Logo from "@/assets/logo_circle.png";
import MenuIcon from "@/assets/hamburger-menu.png";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_wrapper}>
                <div className={styles.header_text}>
                    <p>Franck Mouette D.O</p>
                </div> 
            </div>
            <div className={styles.logo_container}>
                <div className={styles.logo_wrapper}>
                    <Image src={Logo} width={40} height={40} alt="Logo du Centre des deux mains" />
                </div>
                <NavBar />
                <div className={styles.menu_icon}>
                    <Image src={MenuIcon} width={20} height={20} alt="Menu Icon" />
                </div>
            </div>
        </header>
    );
}

export default Header;

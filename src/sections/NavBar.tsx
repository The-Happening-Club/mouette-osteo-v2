import styles from "@/css/components/navbar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <a href="" className={styles.nav__link}>Accueil</a>
            <a href="" className={styles.nav__link}>Franck Mouette</a>
            <a href="" className={styles.nav__link}>Cabinet D&apos;Ostéopathie</a>
            <a href="" className={styles.nav__link}>FAQ</a>
            <a href="" className={styles.nav__link}>Mes Conseils</a>
            <a href="" className={styles.nav__link}>Mes Articles</a>
            <button className={styles.nav__button}>Prendre rendez-vous</button>
        </nav>
    )
}

export default NavBar
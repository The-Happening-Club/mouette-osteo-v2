import styles from "@/css/components/NavBar.module.css"

const NavBar = () => {

    return(
            <nav className={styles.container}>
                <a href="">Accueil</a>
                <a href="">Franck Mouette</a>
                <a href="">Cabinet D'Ostéopathie</a>
                <a href="">FAQ</a>
                <a href="">Mes Conseils</a>
                <a href="">Mes Articles</a>
                <button className={styles.button}>Prendre rendez-vous</button>
            </nav> 
    )
}

export default NavBar


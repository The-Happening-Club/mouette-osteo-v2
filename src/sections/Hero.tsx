import styles from "@/css/components/Hero.module.css";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.hero__content}>
                    <div className={styles.hero__text}>
                        <h1 className={styles.hero__title}>FRANCK MOUETTE</h1>
                        <h3 className={styles.hero__subtitle}>Ostéopathe D.O</h3>
                        <p className={styles.hero__description}>
                            Diplômé en kinésithérapie et en ostéopathie depuis plus de 30 ans,
                            j'ai ouvert en 2005 le Centre des Deux Mains.
                        </p>
                    </div>
                    <div className={styles.hero__image}>
                        <Image
                            src="/franck_1.jpeg"
                            alt="Photo de Franck Mouette"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
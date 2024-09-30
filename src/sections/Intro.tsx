import styles from "@/css/components/intro.module.css";
import Image from "next/image";
import { PrimaryButton } from "@/components/Button";

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.intro__image}>
                <Image
                    src="/deux-mains.jpg"
                    alt="Photo d&apos;une personne en consultation"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className={styles.intro__content}>
                <div className={styles.intro__text}>
                    <h1 className={styles.intro__title}>
                        Pour un corps en harmonie 
                    </h1>
                    <p className={styles.intro__description}>
                        Contactez-nous et commencez votre chemin vers la guérison.
                    </p>
                    <div>
                        <PrimaryButton title="PRENDRE RDV" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
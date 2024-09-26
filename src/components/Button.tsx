import Link from "next/link";
import React,{FC} from "react";
import styles from "@/css/components/button.module.css"

interface IButton {
    title: string,
}


export const PrimaryButton:FC<IButton> = ( {title}) => {

    return(
        <Link href="/" className={`${styles.button} ${styles.primary}`}>
              {title}
        </Link>
    )
}
export const SecondaryButton:FC<IButton> = ( {title}) => {

    return(
        <Link href="/" className={`${styles.button} ${styles.secondary}`}>
            {title}
        </Link>
    )
}
export const TertiaryButton:FC<IButton> = ( {title}) => {

    return(
        <Link href="/">{title}</Link>
    )
}
import {type ButtonProps} from "./button.model";
import * as React from "react";
import styles from "./button.module.scss"

const Button = (props:ButtonProps) => {
    return <button className={styles.container}>gtklein-{props.children}</button>
}

export default Button

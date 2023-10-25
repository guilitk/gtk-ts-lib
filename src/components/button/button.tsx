import {type ButtonProps} from "./button.model";
import * as React from "react";

const Button = (props:ButtonProps) => {
    return <button>gt-{props.children}</button>
}

export default Button

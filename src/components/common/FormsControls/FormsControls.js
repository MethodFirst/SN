import React from "react";
import styles from "./FormsControls.module.css"



export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.FormControl + " " + (hasError ? styles.error: "")}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}




export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
return <FormControl {...props}><textarea {...input} {...props} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...props} {...restProps}/></FormControl>
}

import { HTMLAttributes } from 'react';
import textAreaStyles from './textArea.module.scss'

export type InputProps=  React.DetailedHTMLProps<
React.TextareaHTMLAttributes<HTMLTextAreaElement>,
HTMLTextAreaElement
> &{
    label:string;
}

export default function Input(props:InputProps){
    const {label,id,...restProps} = props;

    return <div className={textAreaStyles.inputWrapper}>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} className={textAreaStyles.input} {...restProps}></textarea>
    </div>
}
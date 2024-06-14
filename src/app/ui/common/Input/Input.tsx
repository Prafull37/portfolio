import { HTMLAttributes } from 'react';
import inputStyles from './input.module.scss'

export type InputProps=  React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> &{
    label:string;
}

export default function Input(props:InputProps){
    const {label,id,...restProps} = props;

    return <div className={inputStyles.inputWrapper}>
        <label htmlFor={id}>{label}</label>
        <input id={id} className={inputStyles.input} {...restProps}/>
    </div>
}
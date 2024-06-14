
import { useEffect } from 'react';
import sidepanelStyle from './sidepanel.module.scss';

type SidePanelProps={
    open:boolean;
    children?:React.ReactNode
}


export default function Sidepanel(props:SidePanelProps){
    const {open,children} = props;

    useEffect(()=>{
        if(open){
              document.body.classList.add("modal-open")
        }else{
            document.body.classList.remove("modal-open")
        }
        console.log("open",open)
    },[open])

    return <div className={`${sidepanelStyle.sidePanel} ${open? sidepanelStyle["sidePanel--open"]:""}`}>{children&&children}</div>
}
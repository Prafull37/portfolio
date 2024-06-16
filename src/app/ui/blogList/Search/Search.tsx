"use client"
import Input from "@/app/ui/common/Input";
import searchStyle from './search.module.scss'
import { IoSearchOutline } from "react-icons/io5";
import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import {  usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search(){
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const [state,setState]= useState<string>(params.get("search") as string);

    const onInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setState(value);
    }


    const onButtonClick=()=>{
        if(state===""){
            params.delete("search")
        }else{
            params.set("search",state)
        }
        router.replace(`${pathname}?${params.toString()}`);
    }


    const onEnter:KeyboardEventHandler<HTMLInputElement>=(e)=>{
        const {key} = e;
        if(key === "Enter"){
            onButtonClick()
        }
    }



    return <div className={searchStyle.searchWrapper}>
        <Input label="" placeholder="Search" value={state} onChange={onInputChange} onKeyUp={onEnter}/>
        <button className={searchStyle.button} onClick={onButtonClick}>
            <IoSearchOutline/>
        </button>
    </div>
}
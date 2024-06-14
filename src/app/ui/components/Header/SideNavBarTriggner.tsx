"use client"
import { useState } from 'react';
import headerStyle from './header.module.scss'


import Sidepanel from "@/app/ui/common/Sidepanel";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import NavLink from "./NavLink";

export default function SideNavBarTrigger(){
    const [isSideNavOpen,setSideMenuOpen]= useState<boolean>(false);

    const toogleSideMenu=()=>{
        setSideMenuOpen((prev)=>!prev)
    }

    return (<><button className={headerStyle.menuButton} onClick={toogleSideMenu}>
        {isSideNavOpen ? <IoClose/>:<FiMenu/>}
    </button>
    <Sidepanel open={isSideNavOpen}>
        <nav className={headerStyle.sidePanelNav}>
            <NavLink/>
        </nav>
    </Sidepanel>
    </>)
}
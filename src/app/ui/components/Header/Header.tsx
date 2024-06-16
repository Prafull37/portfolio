


import Link from 'next/link';
import headerStyle from './header.module.scss'
import NavLink from "./NavLink";
import SideNavBarTrigger from "./SideNavBarTriggner";

export default function Header(){
    return <header className={headerStyle.header}>
        <Link  href="/" className={headerStyle.headerTitleContainer}>
            <div className={headerStyle.initals}>P</div>
            <div>Prafull</div>
        </Link>
        <nav className={headerStyle.nav}>
            <NavLink/>
        </nav>
        <SideNavBarTrigger/>
    </header>
}



import headerStyle from './header.module.scss'
import NavLink from "./NavLink";
import SideNavBarTrigger from "./SideNavBarTriggner";

export default function Header(){
    return <header className={headerStyle.header}>
        <div className={headerStyle.headerTitleContainer}>
            <div className={headerStyle.initals}>P</div>
            <div>Prafull</div>
        </div>
        <nav className={headerStyle.nav}>
            <NavLink/>
        </nav>
        <SideNavBarTrigger/>
    </header>
}
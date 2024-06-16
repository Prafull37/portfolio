import Link from "next/link"
import headerStyle from './header.module.scss'

const NavlinkConstant=[
    // {
    //     key:"1",
    //     title:"About",
    //     href:"/#about",
    //     className:headerStyle.navLink
    // },
    // {
    //     key:"2",
    //     title:"Contact",
    //     href:"/#contact",
    //     className:headerStyle.navLink
    // },
    {
        key:"3",
        title:"Blogs",
        href:"/blogs",
        className:headerStyle.navLink
    }
    
]


export default function NavLink(){
    return <>
        {NavlinkConstant.map(({title,key,...rest})=><Link key={key} {...rest} >{title}</Link>)}
    </>
}
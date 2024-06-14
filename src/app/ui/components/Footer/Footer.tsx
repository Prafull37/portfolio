import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";

import footerStyle from './footer.module.scss'

export default function Footer(){
    return <footer className={footerStyle.footer}>
        <div className={footerStyle.socialMediaWrapper}>
            <Link href="https://linkedin.com/in/prafullsingh37" className={footerStyle.socialLinks} target="_blank">
                <FaLinkedin/>
            </Link>
            <Link href="https://instagram.com/prafullsingh37" className={footerStyle.socialLinks} target="_blank">
                <FaInstagram/>
            </Link>
        </div>
        <div className={footerStyle.inspired}>
            Inspired by <Link href={"https://lmpixels.com/wp/leven-wp/dark/"}>Pixel.com</Link>
        </div>
    </footer>
}
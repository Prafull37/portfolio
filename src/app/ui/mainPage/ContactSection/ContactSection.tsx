import Link from 'next/link'
import contactStyle from './contact.module.scss'
// import FormSection from './FormSection';

import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";



export default function ContactSection(){
    return <div className={contactStyle.wrapper} id="#contact">
            <h3>Connect Me</h3>
            <div className={contactStyle.greetingWrapper}>
                <section className={contactStyle.greetingSection}>
                    <span>I enjoy exploring the open-source ecosystem around JavaScript and React, often recreating projects for fun.</span>
                    {false && <span>I have a keen interest in developer experience, web analytics, and product analytics.</span> }
                    {false && <span>One of my dreams is to build a comprehensive design system.</span> }
                    <span>{"Outside of coding, I'm a foodie and enjoy playing 🏸 or 🏏."}</span>
                    <span>If you share any of these interests or just want to connect, feel free to drop me a message!</span>
                    <div className={contactStyle.linkSection}>
                        <Link href="https://linkedin.com/in/prafullsingh37" target="_blank">
                            <FaLinkedin/>
                        </Link>
                        <Link href="https://instagram.com/prafullsingh37" target="_blank">
                            <FaInstagram/>
                        </Link>
                    </div>
                </section>
                {/* <div className={contactStyle.formSection}>
                   <FormSection/>
                </div> */}
            </div>
    </div>
}
import Image from "next/image";
import introStyle from './introSection.module.scss'

export default function IntroSection(){

    return <div className={introStyle.introSectionContainer}>
        <div className={introStyle.introSection}>
            <div className={introStyle.profilePicContainer}>
                <Image src={"/profile.png"} height={225} width={225} alt="Prafull Profile" className={introStyle.profilePic}/>
            </div>

            <div className={introStyle.nameAndRoleContainer}>
                <h1 className={introStyle.name}> Prafull Singh</h1>
                <div className={"fit-content"}>
                    <h4 className={`${introStyle.role} typing-effect`}>Frontend Developer</h4>
                </div>
            </div>
            
            <div className={introStyle.introTextSection}>
                <article className={introStyle.introArticleSection}>
                    <span>Hello!</span> <span className={introStyle.emoji}>🙋🏻</span> 
                    <span>{"I'm Prafull Singh, a dedicated React Developer with 5 years of successful experience in JavaScript and React. I have a strong background in developing scalable and high-performance applications."}</span>
                    <span>{"I'm passionate about learning, growing, and excelling in the MERN stack."}</span>
                </article>
            </div>
        </div>
    </div>
}
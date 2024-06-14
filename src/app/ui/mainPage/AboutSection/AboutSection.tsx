import Image from "next/image";
import aboutStyle from './aboutSection.module.scss'
import Skill from "@/app/ui/components/Skills/Skill";
import ResumeLink from "./ResumeLink";

const skills:{
  skillName:string,
  experienceNumber:number,
  experienceUnit:"year" | "month" | "day"
}[] =[
    {
    "skillName": "JavaScript",
    "experienceNumber": 5.3,
    "experienceUnit": "year"
  },
  {
    "skillName": "React JS",
    "experienceNumber": 5.3,
    "experienceUnit": "year"
  },
  {
    "skillName": "Redux",
    "experienceNumber": 5.3,
    "experienceUnit": "year"
  },
  {
    "skillName": "React Query",
    "experienceNumber": 1.5,
    "experienceUnit": "year"
  },
  {
    "skillName": "Webpack",
    "experienceNumber": 6,
    "experienceUnit": "month"
  },
  {
    "skillName": "HTML",
    "experienceNumber": 5,
    "experienceUnit": "year"
  },
  {
    "skillName": "CSS",
    "experienceNumber": 5,
    "experienceUnit": "year"
  },
  {
    "skillName": "TypeScript",
    "experienceNumber": 6,
    "experienceUnit": "month"
  },
  {
    "skillName": "Storybook",
    "experienceNumber": 6,
    "experienceUnit": "month"
  },
  {
    "skillName": "Jest",
    "experienceNumber": 6,
    "experienceUnit": "month"
  },
  {
    "skillName": "React Testing Library",
    "experienceNumber": 6,
    "experienceUnit": "month"
  },
  {
    "skillName": "Node.js",
    "experienceNumber": 1,
    "experienceUnit": "year"
  },
  {
    "skillName": "Express",
    "experienceNumber": 1,
    "experienceUnit": "year"
  }]


export default function IntroSection(){

    return <div className={aboutStyle.aboutSectionContainer} id="#about">
        <div className={aboutStyle.aboutSection}>
            <div className={aboutStyle.whoAmI}>
                <h2>Who I Am ?</h2>
                <div className={aboutStyle.text}>
                    I am a passionate web developer specializing in React and JavaScript. With a keen eye for detail and a drive for excellence, I have been recognized consistently for my performance and contributions to successful project deliveries. My journey in the tech industry has equipped me with a versatile skill set and a deep understanding of the intricacies involved in creating seamless and efficient web applications.
                </div>
            </div>
            <div className={aboutStyle.resumeLinkWrapper}>
                <ResumeLink/>
            </div>
        </div>
        <div className={aboutStyle.skillSectioWrapper}>
            <h4>Skill</h4>
            <div className={aboutStyle.skillSection}>
               {skills.map((skill)=><Skill key={skill.skillName} {...skill}/>)}
            </div>
        </div>
    </div>
}
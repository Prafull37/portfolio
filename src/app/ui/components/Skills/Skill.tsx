import skillStyle from './skill.module.scss'

type SkillProps={
    skillName:string,
    experienceNumber:number,
    experienceUnit:"year" | "month" | "day"
}


const EXPERIENCE_UNIT_VS_LABEL={
    "year":"yr",
    "month":"month",
    "day":"day"
}

export default function Skill(props:SkillProps){
    const {skillName,experienceNumber,experienceUnit} = props;
    const experienceLabel = EXPERIENCE_UNIT_VS_LABEL[experienceUnit];

    return (<div className={skillStyle.skillWrapper}>
        <span className={skillStyle.skillName}>{skillName}</span>
       {experienceNumber && experienceUnit && false && <span className={skillStyle.skillExperience}>({experienceNumber} {experienceNumber > 1 ?`${experienceLabel}s`:experienceLabel})</span>}
    </div>)
}
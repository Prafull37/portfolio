import Link from "next/link";

import aboutStyle from "./aboutSection.module.scss";

export default function ResumeLink(){
    return <Link href="https://prafull37.github.io/resume" target="_blank" className={aboutStyle.resumeLink}>
        Resume
    </Link>
}
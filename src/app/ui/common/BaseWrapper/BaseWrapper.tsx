import style from './style.module.scss'

export default function BaseWrapper({children}:{children:React.ReactNode}){
    return <div className={style.pageWrapper}>{children}</div>
}
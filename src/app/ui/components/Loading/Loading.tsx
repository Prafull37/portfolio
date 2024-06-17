import loadingModule from './loading.module.scss';


export default function Loading(){
    return <div className={loadingModule.container}>
        <div className={loadingModule.circle}/>
        <div className={loadingModule.text}>
            Loading ..<span className={loadingModule.blinking}>.</span>
        </div>
    </div>
}
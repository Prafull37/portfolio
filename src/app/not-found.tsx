import { TbError404Off } from "react-icons/tb";


export default function NotFound(){
    return <div className="not-found-container">
        <div className="icon-container-404">
            <TbError404Off />
        </div>
        <div className="message-404">
            Not Found!!!
        </div>
    </div>
}
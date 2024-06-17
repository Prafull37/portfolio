
import { AiOutlineExperiment } from "react-icons/ai";

import noDataStyle from './noData.module.scss';


export default function NoData(){
    
    return <div className={noDataStyle.noData}>
        <div className={noDataStyle.icon}>
            <AiOutlineExperiment/>
        </div>
        <div className={noDataStyle.text}>
            No Data
        </div>
    </div>
}
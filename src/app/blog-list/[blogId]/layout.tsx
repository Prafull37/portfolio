import Link from 'next/link'


import  {getFileDataInJson} from '@/app/lib/blogActions'
import { IoIosArrowRoundBack } from "react-icons/io";

import styles from './layout.module.scss'

type Params={
    blogId:string;
}

type Props =  {
    params:Params
}

export async function generateMetadata(props:Props){
    const {blogId} = props.params;

    const {data} = await getFileDataInJson(blogId);
    
    return {
        title:data.title,
        description:data.description,
    }

}

export default function Layout({children}:{children:React.ReactNode}){

    return <div className={styles.container}>
        <Link href="/blog-list" className={styles.backButton}>
            <IoIosArrowRoundBack/> <span>Back to Blog List</span>
        </Link>
        <main className={styles.mainContent}>
            {children}
        </main>
    </div>
}
import { ReactNode } from "react";
import Search from "@/app/ui/blogList/Search";
import styles from './layout.module.scss';

export default function Layout({children}:{children:ReactNode}){

    return <div className={styles.layoutModule}>
        <div className={styles.extraSection}></div>
        <main className={styles.contentWrapper}>
            {children}
        </main>
        <div className={styles.searchSection}>
            <Search/>

            <div className={styles.extraSection}>
                
            </div>
        </div>
    </div>
}
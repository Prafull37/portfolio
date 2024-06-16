
import { getAllPostsCopy } from "@/app/lib/blogActions";
import Link from 'next/link'

import pageStyle from './page.module.scss'
import { usePathname } from "next/navigation";

type BlogListPage = {
    searchParams:{
        search:string;
        pageIndex:number;
    }
}

export default async function Page(props:BlogListPage){
    const {pageIndex,search} = props.searchParams ||{};
    const data = await getAllPostsCopy({search,pageIndex});

    return (<div>
                {data.map((item,index)=>
                    (<Link key={item.id} href={`/blog-list/${item.id}`} className={`${pageStyle.blog} ${data.length-1 !== index?pageStyle.borderBottom:""}`}>
                        <h3>{item.title}</h3>
                        <div className={pageStyle.metadataStyle}>
                            <div>{item.tags}</div>
                            <div>Updated At :- {item.updatedAt}</div>
                        </div>
                        <section className={pageStyle.excerptStyle}>
                            {item.excerpt}
                        </section>
                    </Link>)
                )}
    </div>)
}
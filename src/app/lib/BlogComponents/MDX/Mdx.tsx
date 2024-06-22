import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "../Image";

type Props = {
    source:string,
    components?:Record<any,any>
}

const defaultComponents={
    Image:Image
}


export default async function Mdx(props:Props){
    // const mdxSource = await renderMarkDown(props.source)
    return <div style={{marginBottom:"5rem"}}>
        <MDXRemote source={props.source} components={{...defaultComponents, ...(props.components||{})}} />
    </div>
}
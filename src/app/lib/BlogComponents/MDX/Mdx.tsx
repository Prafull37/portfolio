import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
    source:string,
    components?:Record<any,any>
}

const defaultComponents:Record<string,React.ComponentType>={

}

export default function Mdx(props:Props){
    return <MDXRemote source={props.source} components={{...defaultComponents, ...(props.components||{})}} />
}
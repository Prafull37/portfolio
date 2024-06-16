import Mdx from "@/app/lib/BlogComponents/MDX/Mdx";
import { getFileDataInJson } from "@/app/lib/blogActions";

type  Props={
    params:{blogId:string}
}

export default async function Page(props:Props){
    const blogId = props.params.blogId;

    const {content} = await getFileDataInJson(blogId)

    return <Mdx source={content}/>
}
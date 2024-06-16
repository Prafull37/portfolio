import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path';
import {createChunk} from './utils'

import postMetadaCopy from './postMetadataCopy';

const postsDirectory = path.join(process.cwd(),'src/app/lib/posts');


const getAllFileNames=async ()=>{
    const fileNames = await fs.readdir(postsDirectory);
    return fileNames;
}

const getPostContents=async (fileName:string)=>{
    const fileContent = await fs.readFile(path.join(postsDirectory,`${fileName}.mdx`));
    return fileContent
}

const getPaginatedPosts=async (posts:Array<Record<any,any>>,pageIndex:number,limit:number)=>{
    const chunks = createChunk(posts,limit)
    return chunks[pageIndex];
}


function firstFourLines(file:Record<string,any>) {
    file.excerpt = file.content.split('\n').slice(0, 4).join(' ');
  }

const jsonifyFileContent = (fileContent:Buffer|string)=>{
    //@ts-expect-error 
    return matter(fileContent,{excerpt:firstFourLines})
}

export const getFileDataInJson=async (fileName:string)=>{
    const fileContent = await getPostContents(fileName);
    const content = await jsonifyFileContent(fileContent);
    return content;
}

export const getAllPosts = async()=>{
    const fileNames = await getAllFileNames();
    const allPosts = []
    for(let fileName of fileNames){
        const id = fileName.replace(/\.mdx$/, '');
        const content = await getFileDataInJson(id);
        allPosts.push({id,...content})
    }

    return allPosts
}


export const getAllPostsCopy = async({search="",pageIndex=0,limit=10}:{search:string,pageIndex:number,limit?:number})=>{
    const data = postMetadaCopy.filter(({title})=>{
        return search==="" ? true:title.toLowerCase().includes(search.toLowerCase())
    })
    const chunkedData = createChunk(data,limit);
    return chunkedData[pageIndex] || [];
}


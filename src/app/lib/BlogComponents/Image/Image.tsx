import NextImage, { ImageProps } from 'next/image'
import imageStyle from './image.module.scss'


export default function Image(props:ImageProps){
    const {style,width,height,...restProps} = props; 
    return <div className={imageStyle.imageContainer} style={{height:`${height}px`,width:`${width}px`}}>
            <NextImage {...restProps} fill style={{...style,objectFit:"contain"}}/>
        </div>
}
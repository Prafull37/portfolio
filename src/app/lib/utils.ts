export const createChunk=(array:Array<any>,size:number)=>{
    const newArray = [];
    for(let i=0; i < array.length;i+=size){
        console.log(i,i+size,array.slice(i,i+size))
       newArray.push( array.slice(i,i+size));
    }
    return newArray
}
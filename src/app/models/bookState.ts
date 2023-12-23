export interface Book{
    name:string,
    author:string,
    image:string,
    price:number,
    available:number,
    year:Date,
    borrowedUsers:Array<string>,
    _id:string
}

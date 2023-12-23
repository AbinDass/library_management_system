export interface Book{
    name:string,
    author:string,
    image:string,
    price:number,
    available:number,
    year:Date,
    _id:string
}

export interface userAction{
    bookid:string,
    userMail:string,
    status:string,
}
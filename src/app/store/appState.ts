import { Book, userAction } from "../models/bookState";
import { userData } from "../modules/auth/model/userData";

export interface bookStateInterface{
    bookManagement:Book[],
    userActions:userAction
}

export interface userStateInterface{
    userManagement:userData[]
}

//new user -  [ { bookId ; ... , userEmail:....,status:'borrowed'|'returned'}]
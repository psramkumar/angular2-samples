export interface IBookmark{
    title:String;
    address:String;
    isFavorite:Boolean;
    likes:Number;
    votes:Number
}

export class Bookmark implements IBookmark{
    title:String;
    address:String;
    isFavorite:Boolean = false;
    likes:Number = 0;
    votes:Number = 0;
    
    constructor(title:String, address:String){
        this.title = title;
        this.address = address;
    }
}

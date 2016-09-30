interface IAuthor {
    name: string,
    lastName: string,
    birthDate?: number
}

interface ILendable {
    id: string,
    borrow: (userId: string)=> boolean
}

class Book implements ILendable{
    constructor(public name: string,
                public author: IAuthor,
                public year: number,
                public read?: number) {
    }
    id: string;
    borrow?: (userId: string)=>{
        return true;
    };
}

const book1 = new Book('The Bible', {name: 'GOD', lastName: 'GOD'}, 96);
const book2 = new Book('JavaScript', {name: 'Doglas', lastName: 'John'}, 2005);

let booksList: Book[];
let userIds: number[];

booksList = adder(booksList, book1);
booksList = adder(booksList, book2);
booksList = adder(booksList, {
    id: "sdas",
    name: 'ABS',
    author: {name: 'A', lastName: "B"},
    year: 23,
    read: 2
});


userIds: adder(userIds, 2);


function adder<T>(list: T[], book: T): T[]{
    return [...list, T];
}




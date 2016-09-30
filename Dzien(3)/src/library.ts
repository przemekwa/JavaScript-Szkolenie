class Book {
    constructor(public name: string,
                public author: string,
                public year: number,
                public read?: number) {


    }
}

const book1 = new Book('The Bible', 'The Good', 96);
const book2 = new Book('JavaScript', 'Douglas', 2005);



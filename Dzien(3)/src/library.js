var Book = (function () {
    function Book(name, author, year, read) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.read = read;
    }
    return Book;
}());
var book1 = new Book('The Bible', 'The Good', 96);
var book2 = new Book('JavaScript', 'Douglas', 2005);
//# sourceMappingURL=library.js.map
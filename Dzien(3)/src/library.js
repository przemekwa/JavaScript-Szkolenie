var Book = (function () {
    function Book(name, author, year, read) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.read = read;
    }
    return Book;
}());
return true;
;
var book1 = new Book('The Bible', { name: 'GOD', lastName: 'GOD' }, 96);
var book2 = new Book('JavaScript', { name: 'Doglas', lastName: 'John' }, 2005);
var booksList;
var userIds;
booksList = adder(booksList, book1);
booksList = adder(booksList, book2);
booksList = adder(booksList, {
    id: "sdas",
    name: 'ABS',
    author: { name: 'A', lastName: "B" },
    year: 23,
    read: 2
});
userIds: adder(userIds, 2);
function adder(list, book) {
    return list.concat([T]);
}
//# sourceMappingURL=library.js.map
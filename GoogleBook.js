function GoogleBook() {
    this.description = "A description";
    this.title = "A title";
    this.thumbnail = "A thumbnail";
    this.author = ["A author"];
    this.publishedDate = "A year";
}

GoogleBook.prototype.googleBookItemMapper = function(response) {
    var bookInfo = response.volumeInfo;
    this.description = bookInfo.description;
    this.title = bookInfo.title;
    this.thumbnail = bookInfo.imageLinks.thumbnail;
    this.author = bookInfo.authors;
    this.publishedDate = bookInfo.publishedDate;
}

module.exports = GoogleBook;
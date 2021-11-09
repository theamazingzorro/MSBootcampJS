function GoogleBook() {
    this.description = "A description";
    this.title = "A title";
    this.thumbnail = "A thumbnail";
    this.author = ["A author"];
    this.publishedDate = "A year";
}

GoogleBook.prototype.googleBookItemMapper = function() {
    throw new Error("not yet implemented");
}

module.exports = GoogleBook;
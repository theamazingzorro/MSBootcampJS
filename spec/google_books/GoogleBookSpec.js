describe("GoogleBook", function() {
    var GoogleBook = require("../../GoogleBook");
    var book;

    beforeEach(function() {
        book = new GoogleBook();
    });

    describe("when a book json is loaded with googleBookItemMapper", function() {
        var GoogleBookItem = require("../../GoogleBookItem");

        beforeEach(function() {
            book.googleBookItemMapper(GoogleBookItem);
        });

        it("should set the description", function() {
            expect(book.description).toEqual('Cat lovers will laugh out loud at the quirkiness of their feline friends with these insightful and curious poems from the singular minds of housecats. In this hilarious book of tongue-in-cheek poetry, the author of the internationally syndicated comic strip Sally Forth helps cats unlock their creative potential and explain their odd behavior to ignorant humans. With titles like "Who Is That on Your Lap?, " "This Is My Chair, " "Kneel Before Me, " "Nudge, " and "Some of My Best Friends Are Dogs, " the poems collected in I Could Pee on This perfectly capture the inner workings of the cat psyche. With photos of the cat authors throughout, this whimsical volume reveals kitties at their wackiest, and most exasperating (but always lovable).');
        });

        it("should set the title", function() {
            expect(book.title).toEqual("I Could Pee on This");
        });

        it("should set the thumbnail", function() {
            expect(book.thumbnail).toEqual("http://books.google.com/books/content?id=Cy8nyLknYLIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api");
        });

        it("should set the author", function() {
            expect(book.author).toEqual(["Francesco Marciuliano"]);
        });

        it("should set the published date", function() {
            expect(book.publishedDate).toEqual("2012-08-03");
        });
    });
});
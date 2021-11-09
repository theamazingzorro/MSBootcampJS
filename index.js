const x = require("regenerator-runtime");

var GoogleBook = require('./GoogleBook.js');
var GoogleBookService = require ('./dist/GoogleBookService.js').GoogleBookService;

var book = new GoogleBook();

const service = new GoogleBookService();
service.fetchBooks("Cats");
setTimeout(function(){ console.log(service.fetchedResults); }, 1000);

module.exports = {GoogleBookService, GoogleBook};
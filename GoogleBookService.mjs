import axios from 'axios';

export default class GoogleBookService {
    constructor() {
        this.url = 'https://www.googleapis.com/books/v1/volumes?q=';
        this.fetchedResults = [];
        this.__axios = axios;
    }

    fetchBooks = async () => {
        
    }
}
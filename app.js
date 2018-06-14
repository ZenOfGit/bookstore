let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
let db = mongoose.connection;

// Home page route
app.get('/', (req, res) => {
    res.send('Please use /api/books or /api/genres.');
});


//*****************GENRE ROUTES***************************************
// Genre page route
app.get('/api/genres', (req, res) => {
   Genre.getGenres((err, genres) => {
       if(err){
           throw err;
       }
       res.json(genres);
   });
});

// Genre add route
app.post('/api/genres', (req, res) => {
    let genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

// Genre update route
app.put('/api/genres/:_id', (req, res) => {
    let id = req.params._id;
    let genre = req.body;
    Genre.updateGenre(id, genre, (err, genre) => {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

// Genre remove route
app.delete('/api/genres/:_id', (req, res) => {
    let id = req.params._id;
    Genre.removeGenre(id, (err, genre) => {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

//*****************BOOK ROUTES***************************************
// All books route
app.get('/api/books', (req, res) => {
    Book.getBooks((err, books) => {
        if(err){
            throw err;
        }
        res.json(books);
    });
});

// Book get by ID route
app.get('/api/books/:_id', (req, res) => {
    Book.getBookById(req.params._id, (err, book) => {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

// Book add route
app.post('/api/books', (req, res) => {
    let book = req.body;
    Book.addBook(book, (err, book) => {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

// Book update route
app.put('/api/books/:_id', (req, res) => {
    let id = req.params._id;
    let book = req.body;
    Book.updateBook(id, book, (err, book) => {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

// Book delete route
app.delete('/api/books/:_id', (req, res) => {
    let id = req.params._id;
    Book.removeBook(id, (err, book) => {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

// Tell the app where to listen
app.listen(3000);
console.log('Running on port 3000...');

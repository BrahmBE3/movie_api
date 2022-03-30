const express = require('express');
const app = express();
 morgan = require ('morgan');
//  const app = express();
app.use(morgan ('common'));

let topMovies = [
{'Title':'It Happened One Night',
    'Year':'1934',
    'Genre':'Thriller'},  
{'Title':'Citizen Kane',
    'Year':'1941',
    'Genre':'funny'},
{'Title':'The Wizard of Oz',
    'Year':'1939',
    'Genre':'Sci-Fi'},
{'Title':'Modern Times',
    'Year':'1936',
    'Genre':'Satire'},
{'Title':'Black Panther',
    'Year':'2018',
    'Genre':'romantic comedie'},
{ 'Title':'Parasite (Gisaengchung)',
    'Year':'2019',
    'Genre':'rom-com'},
{'Title':'Avengers Endgame', 
    'Year':'2019',
    'Genre':'Drama'},
{'Title':'Casablanca',
    'Year':'1942',
    'Genre':'Drama'},
{ 'Title':'The Godfather',
    'Year':'1972',
    'Genre':'Crime'},
{'Title':'The Dark Knight', 
    'Year':'2008',
    'Genre':'Crime'}
];



app.get('/', (req, res) => {
    res.send('lets see the best movies!')
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html',{ root: __dirname});
});

app.get('/movies',(req, res) => {
    res.json(topMovies);
});

app.use(express.static('public'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something went wrong!');
});

app.listen(8080, () => {
    console.log('app is working on port 8080')
});
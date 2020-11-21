const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerPartials(__dirname + '/views')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Reinaldo'
    });

})

app.get('/about', (req, res) => {

    res.render('about');

})

app.listen(port, () => {
    console.log(`Listening request in port ${port}`);
});
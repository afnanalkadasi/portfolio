
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (_, res) => {
    res.status(200).render('index',{title:'portfolio'});
});


app.use((_, res) => {
    res.statusCode = 404;
    res.end('<h1> Sorry, page not found</h1>');
});

const port=process.env.PORT || 45000
app.listen(port, () => {
    console.log('Server running at http://127.0.0.1:45000');
})
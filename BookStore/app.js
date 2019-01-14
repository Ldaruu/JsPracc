const express = require('express');
const app = express();
const controller = require('./controller');
const PORT = 8080;
const path = require('path');

app.use('/assests', express.static('assests'));
app.use(express.json());

app.set('view engine', 'ejs');
controller(app);

const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'laszlo1986',
    port     :  3306,
    database : 'bookstore'
});

const getAllBooks = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id';



app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/books', (req, res) => {
    connection.query(getAllBooks,(err,data)=> {
        if(err){
            console.log(err.message);
            res.status(500).send();
        }else{
            res.json(data);

        }
    });
});


app.listen(PORT, () => {
    console.log(`Listening to ${PORT} port!`);
});

module.exports = function(app){
    
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'laszlo1986',
        port     :  3306,
        database : 'bookstore'
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

    connection.connect( function(err) {
        if(err){
            console.log('Error connection to DB: '+ err.stack);
            return;
        }
        console.log('Connection established: ' + connection.threadId);
    } );
    const getAllBooks = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id';

    connection.query(getAllBooks, function(err, data){
        if(err){
            console.log(err.message);
        }
       app.get('/', (req,res) => {
            // console.log(data);
            res.render('main',{
                booktitle : data,
            });
          });
        });
        // connection.end();
};

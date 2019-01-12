module.exports = function(app){

    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'laszlo1986',
        port     :  3306,
        database : 'bookstore'
    });

    connection.connect( function(err) {
        if(err){
            console.log('Error connection to DB: '+ err.stack);
            return;
        }
        console.log('Connection established: ' + connection.threadId);
    } );
    connection.query('SELECT book_name FROM book_mast;', function(err, data){
        if(err){
            console.log(err.toString());
        }
        app.get('/', (req, res) =>{
            console.log(res.booktitle);
            res.render('index',{
                booktitle : data,
            });
        });
    });

    connection.end();

};
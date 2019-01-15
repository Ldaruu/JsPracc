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
        const {book_name,aut_name,cate_descrip,pub_name,book_price} = req.query;
        if(book_name){
            connection.query(`${getAllBooks} WHERE book_name LIKE '%${book_name}%';`,(err,data) => {
               if(err){
                   console.log(err.message);
                   res.send(500).status;
               } else{
                   res.json(data);
               }
            });
        }else if(aut_name){
            connection.query(`${getAllBooks} WHERE aut_name LIKE '%${aut_name}%';`,(err,data) => {
                if(err){
                    console.log(err.message);
                    res.send(500).status;
                } else{
                    res.json(data);
                }
             });
        }else if(cate_descrip){
            connection.query(`${getAllBooks} WHERE cate_descrip LIKE '%${cate_descrip}%';`,(err,data) => {
                if(err){
                    console.log(err.message);
                    res.send(500).status;
                } else{
                    res.json(data);
                }
             });
        }else if(pub_name){
            connection.query(`${getAllBooks} WHERE pub_name LIKE '%${pub_name}%';`,(err,data) => {
                if(err){
                    console.log(err.message);
                    res.send(500).status;
                } else{
                    res.json(data);
                }
             });
        }else if(book_price){
            connection.query(`${getAllBooks} WHERE book_price %3C '${book_price}';`,(err,data) => {
                if(err){
                    console.log(err.message);
                    res.send(500).status;
                } else{
                    res.json(data);
                }
             });
        }else{
            connection.query(getAllBooks,(err,data)=> {
                if(err){
                    console.log(err.message);
                    res.status(500).send();
                }else{
                    res.json(data);
        
                }
            });
        }
    });

    connection.connect( function(err) {
        if(err){
            console.log('Error connection to DB: '+ err.stack);
            return;
        }
        console.log('Connection established: ' + connection.threadId);
    } );
    const getAllBooks = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ((book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id) INNER JOIN category ON book_mast.cate_id = category.cate_id) INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id';

    connection.query(getAllBooks,(err, data) =>{
        if(err){
            console.log(err.message);
        }
       app.get('/', (req,res) => {
            console.log(data);
            res.render('main',{
                booktitle : data,
            });
          });
        });
        // connection.end();
};

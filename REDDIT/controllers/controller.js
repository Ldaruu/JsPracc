module.exports = (app) =>{

    const dateTime = require('./datetime');
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'laszlo1986',
        port     :  3306,
        database : 'reddit'
    });
    connection.connect( function(err) {
        if(err){
            console.log('Error connection to DB: '+ err.message);
            return;
        }
        console.log('Connection established: ' + connection.threadId);
    } );

    app.get('/',(req, res) => {
        res.sendFile(__dirname +'/views/index.html')  
    });

    app.get('/api/posts', (req, res) => {
        connection.query('SELECT * FROM posts;', (err, row) => {
            if(err){
                console.log(err.message);
                res.status(500).send('Error with Database!');
                return;
            }else{
                res.json(row);
            }
        });
      });
   
   app.post('/api/posts', (req, res) => {
       const title = req.body.title;
       const url =  req.body.url;
       const vote = 0;
       const date = dateTime();
       if(title == undefined || url == undefined){
           res.status(418).send('Title or URL is missing!');
       }else{
           connection.query(`INSERT INTO posts (title, url, vote, date) VALUES(?, ?, ?, ?);`,[title, url, vote, date], function(err, result){
               if(err){
                console.log(err.message);
                res.status(500).send('Error with Database!');
                return;
               }
               connection.query(`SELECT * FROM posts WHERE title = ? AND url = ? AND vote = ? AND date = ?;`, [title, url, vote, date], function(err,result){
                   if(err){
                    console.log(err.message);
                    res.status(500).send('Error with Database!');
                    return;
                   }
                   res.send(result);
               });
           });
       }
   });
}
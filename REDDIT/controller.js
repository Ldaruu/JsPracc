module.exports = (app) =>{

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
}
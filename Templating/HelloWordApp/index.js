const express = require('express');
const app = express();
const PORT = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page 
app.get('/',(req, res) =>{
    //render home page
    res.render('home', {
        title: '🌍 Hello World 🌍',
        welcome: 'Hello on my first page',
        owner: 'Laz'
    });
});

//start express app on port 8080
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
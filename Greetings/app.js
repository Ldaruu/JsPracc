const express = require('express');
const app = express();
const PORT = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/',(req,res) =>{
    res.render('home' , {name: req.query.name});
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
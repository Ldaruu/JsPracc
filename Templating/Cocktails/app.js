const express = require('express');
const controller = require('./controllers/controller');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

controller(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);

  
});
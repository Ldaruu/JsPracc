const express = require('express');
const app = express();
const controller = require('./controller');
const PORT = 8080;

app.use('/assets', express.static('asssets'));
app.use(express.json());

app.set('view engine', 'ejs');
controller(app);

app.listen(PORT, () => {
    console.log(`Listening to ${PORT} port!`);
})

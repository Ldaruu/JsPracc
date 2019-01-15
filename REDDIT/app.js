const express = require('express');
const app = express();
const controller = require('./controller');
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.json());
app.use('/assets',express.static('assets'));
controller(app);

const server = app.listen(PORT,() => {
    console.log(`App is runing on port ${PORT}`);
});
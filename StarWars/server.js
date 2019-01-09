const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
const path = require('path');
const PORT = 8080;

app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

const server =  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

module.exports = {app, server};
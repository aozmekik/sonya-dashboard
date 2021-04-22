const express = require('express');
var bodyParser = require('body-parser');
const app = express();
require('./api/models/db');

// req.body undefined fixed.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const apiRouter = require('./api/routes/index');

app.use(express.static('./dist/'));
app.use('/api', apiRouter)


app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/' }
    );
});


app.listen(process.env.PORT || 8080);
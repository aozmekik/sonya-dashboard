require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
require('./api/models/db');
require('./api/config/passport');

// req.body undefined fixed.
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const apiRouter = require('./api/routes/index');

// allowing CORS requests in
app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


app.use(express.static('./dist/'));
app.use(passport.initialize());
app.use('/api', apiRouter)


app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/' }
    );
});

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res
            .status(401)
            .json({ "message": err.name + ": " + err.message });
    }
})


app.listen(process.env.PORT || 8080);
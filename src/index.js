
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;      

// Use bodyParser 
app.use(bodyParser.urlencoded({ extended: true }));
// Use EJS 
app.set('view engine', 'ejs');
app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    // res.render(__dirname + '/public/views/home.ejs');
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log("Server spun up on port " + port);
});



const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
const bodyParser = require("body-parser")
const app = express();
const gm = require('gm')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended : true}));

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);
app.use(fileUpload());

app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    const myFile = req.files.file;

    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

app.post('/newmage', (req, res) => {
    let body = ''
    if(req.method === 'POST'){
        req.on('data', chunk => {
            body += chunk.toString('utf8');
        });
        req.on('end', () => {
            const body_string = String(body).replace(/[""]+/g, '')
            const body_array = body_string.split(',')
            console.log(body_array)
        });
    }
   
})


app.listen(5000, () => {
    console.log('server is running at port 5000');
})
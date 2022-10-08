const express = require("express");
const app = express();
const fs = require("fs");
const upload = require("express-fileupload");
require('dotenv').config();

app.use(upload())
app.use(express.static('public'))
app.post('/send', (req, res) => {
    if (req.files) {
        var files = req.files.file
        Object.keys(files).map( key => {
            var file = files[key];
            var date = new Date();
            console.log('###########"' + file.name + '"::' + date.toString() + '#############')
            file.mv('./upload/' + file.name, (err) => {
                if (err) {
                    res.send(err)
                } else {
                    date = new Date();
                    console.log('###########"' + file.name + '"::' + date.toString() + '#############')
                }
            })
        })
        res.redirect('/out.html')
    } else {
        res.redirect('/error.html')
    }
});
app.listen(5000, process.env.IPV4)

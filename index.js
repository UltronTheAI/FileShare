const express = require("express");
const app = express();
const fs = require("fs");
const upload = require("express-fileupload");
require('dotenv').config();

app.use(upload())
app.use(express.static('public'))
app.post('/send', (req, res) => {
    if (req.files) {
        var file = req.files.file
        var fileName = file.name
        const date = new Date();
        console.log('###########"' + fileName + '"::' + date.toString() + '#############')
        file.mv('./upload/' + fileName, (err) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/out.html')
            }
        })
    }
});
app.listen(5000, process.env.IPV4)

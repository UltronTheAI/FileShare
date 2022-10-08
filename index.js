const express = require("express");
const app = express();
const fs = require("fs");
const upload = require("express-fileupload");
require('dotenv').config();
console.log("You'r webApp is ready: http://" + process.env.IPV4 + ':5000')
console.log("Share this link to you'r sender's.\n\n")
app.use(upload())
app.use(express.static('public'))
app.post('/upload', (req, res) => {
    if (req.files) {
        if (req.files.file) {
            var files = req.files.file;
            if (files.length > 1) {
                Object.keys(files).map(key => {
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
            } else {
                var date = new Date();
                console.log('###########"' + files.name + '"::' + date.toString() + '#############')
                files.mv('./upload/' + files.name, (err) => {
                        if (err) {
                            res.send(err)
                        } else {
                            date = new Date();
                            console.log('###########"' + files.name + '"::' + date.toString() + '#############')
                        }
                    })
            }
            res.redirect('/out.html')
        } else {
            res.redirect('/error.html')
        }
    }
});
app.listen(5000, process.env.IPV4)

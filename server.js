const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const path = require("path");
const fs = require('fs');

// Total commands
const dir = './commands';

fs.readdir(dir, (err, files) => {
  console.log('Total commands:', files.length);
});

// Settings
app.set('port', process.env.PORT || 3000)

// Engine
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", ".hbs")
app.engine(".hbs", hbs({
    extname: ".hbs",
    defaultLayout: "main"
}))

// Static Files
app.use(express.static("public"))

// Routes
app.get("/", (req, res) => {
    res.render("home", {
        title: "Gora✨"
    });
});

// Server listening
module.exports = () => {
    app.listen(app.get('port'), () => {
        console.log('Server on port:', app.get('port'))
    })
}

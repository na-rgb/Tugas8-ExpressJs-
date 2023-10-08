
var express = require(`express`);
var app = express();

var films = require(`./routes/films.js`);
var categories = require(`./routes/categories.js`);

app.get(`/`, function (req, res) {
  res.send(`Hallo Rakamin Academy!`);
});

app.use(`/films`, films);
app.use(`/categories`, categories);

app.listen(3000);
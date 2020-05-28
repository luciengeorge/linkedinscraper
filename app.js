const express = require('express');
const scrape = require('./scraper');

const app = express();
const port = process.env.PORT || 3001

app.get('/scrape', (req, res) => {
  scrape(req.query.url).then((data) => {
    res.send({ data });
  }).catch((error) => {
    console.log(error);
    res.send({ error });
  })
});

app.listen(port, () => {
  console.log(`server is up on port ${port}.`);
});

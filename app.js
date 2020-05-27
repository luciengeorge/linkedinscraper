const express = require('express');
const scrape = require('./scraper');

const app = express();
const port = process.env.PORT || 3000

app.get('/scrape', (req, res) => {
  scrape(req.query.url).then((data) => {
    res.send({ data });
  }).catch((error) => {
    console.log(error);
    res.send({ error });
  })
});

app.listen(port, () => { // port 3000
  console.log(`server is up on port ${port}.`);
});

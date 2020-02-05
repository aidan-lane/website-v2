const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const routes = require('./routes.js');
app.use('/api', routes);

// handle production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Started server on port ${port}`));
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const routes = require('./routes.js');
app.use('/api', routes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Started server on port ${port}`));
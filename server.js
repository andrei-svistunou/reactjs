const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3003;

app.use(cors());

app.get('/', (req, res) => res.json({ msg: 'Express sends message!' }));

app.listen(PORT, () => console.log('Example app listening on port 3003!'));

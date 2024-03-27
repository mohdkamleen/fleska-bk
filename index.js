require("dotenv").config()
const express = require('express'); 
const cors = require('cors'); 
const app = express(); 

app.use(cors()); 

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/', (_req, res) => res.send('Server started'));
 
const { PORT } = process.env;

app.listen(PORT, () => console.log(`Connected to Port ${PORT}`));
 
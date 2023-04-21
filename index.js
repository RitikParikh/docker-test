const { log } = require('console');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {res.send('chl gaya')});
app.get('/naya', (req, res) => {res.send('chl gaya naya')});
app.get('/or-agya', (req, res) => {res.send('chl gaya or-naya')});
app.get('/or-btao', (req, res) => {res.send('chl gaya or-btao')});
app.listen(port,()=>{
    console.log('CHALU HO GYA BHAI KR LO MJE....!!!');
})
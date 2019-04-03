const express = require('express');
const app = express();
const db = require('./db');

app.get('/api/week/:num', async (req, res) => {
    try {
        console.log(req.params.num)
        const r = await db.getWeek(parseInt(req.params.num));
        res.send(r);
    } catch(e){
        res.send(e);
    }
});

module.exports.app = app;
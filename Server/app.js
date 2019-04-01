const express = require('express');
const app = express();
const db = require('./db');

app.get('/api/week', async (req, res) => {
    try {
        const r = await db.getWeek(1);
        res.send(r);
    } catch(e){
        res.send(e);
    }
});

module.exports.app = app;
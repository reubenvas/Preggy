const express = require('express');

const {
  calculateDueDate,
  calculateWeek,
  calculateAdditionalDays,
} = require('./calendar');

const app = express();
const db = require('./db');

app.get('/api/week/:num', async (req, res) => {
  try {
    const r = await db.getWeek(Number(req.params.num));
    res.send(r);
  } catch (e) {
    res.send(e);
  }
});

app.get('/api/get_week/period_date/:dateString', (req, res) => {
  const today = new Date();
  const dueDate = calculateDueDate(req.params.dateString);
  const currentWeek = calculateWeek(today, dueDate);
  const timePregnant = calculateAdditionalDays(today, dueDate);
  const data = {
    dueDate,
    currentWeek,
    timePregnant,
  };

  res.send(JSON.stringify(data));
});

app.get('/api/get_week/due_date/:dateString', (req, res) => {
  const today = new Date();
  const dueDate = new Date(req.params.dateString);
  console.log(dueDate);
  const currentWeek = calculateWeek(today, dueDate);
  const timePregnant = calculateAdditionalDays(today, dueDate);
  const data = {
    dueDate,
    currentWeek,
    timePregnant,
  };

  res.send(JSON.stringify(data));
});

module.exports.app = app;

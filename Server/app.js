const express = require('express');

const {
  calculateDueDate,
  calculateWeek,
  calculateAdditionalDays,
  getDaysPassed,
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

app.get('/api/get_week/period_date/:dateString', async (req, res) => {
  const today = new Date();
  const dueDate = calculateDueDate(req.params.dateString);
  const currentWeek = calculateWeek(today, dueDate);
  const timePregnant = calculateAdditionalDays(today, dueDate);
  const daysPassed = getDaysPassed(today, dueDate);
  const { tagLine } = await db.getWeek(Number(currentWeek));
  const data = {
    dueDate,
    currentWeek,
    timePregnant,
    ...tagLine,
    daysPassed,
  };

  res.send(JSON.stringify(data));
});

app.get('/api/get_week/due_date/:dateString', async (req, res) => {
  const today = new Date();
  const dueDate = new Date(req.params.dateString);
  const currentWeek = calculateWeek(today, dueDate);
  const timePregnant = calculateAdditionalDays(today, dueDate);
  const daysPassed = getDaysPassed(today, dueDate);
  const { tagLine } = await db.getWeek(Number(currentWeek));
  const data = {
    dueDate,
    currentWeek,
    timePregnant,
    ...tagLine,
    daysPassed,
  };

  res.send(JSON.stringify(data));
});

app.get('/api/blogposts/:week', async (req, res) => {
  try {
    const r = await db.getBlogposts(Number(req.params.week));
    res.send(r);
  } catch (e) {
    res.send(e);
  }
});

module.exports.app = app;

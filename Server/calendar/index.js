function calculateDueDate(date) {
  const lastPeriod = new Date(date);
  const dueDate = new Date(lastPeriod.setTime(lastPeriod.getTime() + 280 * 86400000));
  return dueDate;
}

function getDaysPassed(today, dueDate) {
  const dateDiff = (dueDate - today) / 86400000;
  const daysRemaining = Math.ceil(dateDiff);
  return 280 - daysRemaining;
}

function calculateWeek(today, dueDate) {
  const weeksPassed = Math.ceil(getDaysPassed(today, dueDate) / 7);
  return weeksPassed;
}

function calculateAdditionalDays(today, dueDate) {
  const daysPassed = getDaysPassed(today, dueDate);
  let weeksPassed = Math.floor(daysPassed / 7);
  let remainder = (daysPassed % 7) - 1;
  if (remainder === -1) {
    remainder = 6;
    weeksPassed -= 1;
  }
  return `${weeksPassed} + ${remainder}`;
}

module.exports = {
  calculateDueDate,
  calculateWeek,
  calculateAdditionalDays,
  getDaysPassed,
};

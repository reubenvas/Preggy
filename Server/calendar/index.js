function calculateDueDate(date) {
    const lastPeriod = new Date(date);
    const dueDate = new Date(lastPeriod.setTime( lastPeriod.getTime() + 280 * 86400000 ));
    return dueDate;
}

function calculateWeek(dueDate) {
    const weeksPassed = Math.ceil( getDaysPassed(dueDate) / 7);
    return weeksPassed;
}

function calculateAdditionalDays(dueDate){
    const daysPassed = getDaysPassed(dueDate);
    const weeksPassed = Math.floor(daysPassed/7);
    const remainder = (daysPassed % 7) - 1;
    return `${weeksPassed} + ${remainder}`;
}

function getDaysPassed(dueDate) {
    const today = new Date();
    const dateDiff = (dueDate - today) / 86400000;
    const daysRemaining = Math.ceil(dateDiff);
    return 280 - daysRemaining;
}

module.exports = {
    calculateDueDate,
    calculateWeek,
    calculateAdditionalDays,
}

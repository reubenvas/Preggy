function calculateDueDate(date) {
    const lastPeriod = new Date(date);
    const dueDate = new Date(lastPeriod.setTime( lastPeriod.getTime() + 280 * 86400000 ));
    return dueDate;
}

function calculateWeek(dueDate) {
    const today = new Date();
    const dateDiff = (dueDate - today) / 86400000;
    const daysRemaining = Math.floor(dateDiff);
    const daysPassed = 280 - daysRemaining;
    const weeksPassed = Math.ceil(daysPassed/7);

    return weeksPassed;
}

function calculateAdditionalDays(dueDate){
    const today = new Date();
    const dateDiff = (dueDate - today) / 86400000;
    const daysRemaining = Math.ceil(dateDiff);
    const daysPassed = 280 - daysRemaining;
    const weeksPassed = Math.floor(daysPassed/7);
    const remainder = (daysPassed % 7) - 1;

    return `${weeksPassed} + ${remainder}`;
    //return '15 + 7';
}

module.exports = {
    calculateDueDate,
    calculateWeek,
    calculateAdditionalDays,
}

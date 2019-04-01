

function populateDatabase(DB, numOfWeeks) {
    for (let i = 1; i <= numOfWeeks; i++) {
        const week = {
            week: i,
            day: [
                { day: 1, content: "" },
                { day: 2, content: "" },
                { day: 3, content: "" },
                { day: 4, content: "" },
                { day: 5, content: "" },
                { day: 6, content: "" },
                { day: 7, content: "" }
            ],
            content: "lorem ipsum week " + i,
        }
        DB.collection("weeks").insertOne(week)
    }
}

module.exports = {
    populateDatabase
}

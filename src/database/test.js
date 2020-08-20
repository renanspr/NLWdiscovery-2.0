const Database =  require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    
    // INSERT DATA
    proffyValue = {
        name: "Renan Spera",
        avatar: "https://avatars2.githubusercontent.com/u/55781451?s=460&u=dcf6ff9473622faec8fac45a90e421d27d63a261&v=4",
        whatsapp: 987654321, 
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita omnis, commodi nisi quas qui ex, aliquam nulla error vel porro dolore? Dolorum laudantium, facere modi doloremque et dolorem mollitia."
    }

    classValue = {
        subject: 1,
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // READ INSERTED DATA
    // ALL proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");

    // READ A PARTICULAR TEACHER'S CLASSES
    // AND BRING TEACHER'S DATA TOGETHER
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1; 
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `) 
})
const proffys = [
    {  
        name: "Renan Spera",
        avatar: "https://avatars2.githubusercontent.com/u/55781451?s=460&u=dcf6ff9473622faec8fac45a90e421d27d63a261&v=4",
        whatsapp: 987654321, 
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita omnis, commodi nisi quas qui ex, aliquam nulla error vel porro dolore? Dolorum laudantium, facere modi doloremque et dolorem mollitia.",
        subject: "Matemática",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber) {
    const arrayPosition = subjectNumber - 1;
    return subjects[arrayPosition]
}

function pageLanding(req, res) {    
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query;

    return res.render("study.html", {proffys, filters, subjects, weekdays})    
}

function pageGiveClasses(req, res) {
    const data = req.query;
    const isNotEmpty = Object.keys(data).length > 0;

    if (isNotEmpty) {   
        data.subject = getSubject(data.subject);
        proffys.push(data);

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
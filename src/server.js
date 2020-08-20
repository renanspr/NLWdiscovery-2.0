const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages');

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true }))
// Static files
.use(express.static("public"))
// App's routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

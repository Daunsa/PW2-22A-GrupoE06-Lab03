const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")

});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.post('/nuevo', (request, response) => {
    response.setHeader('Content-type', 'text/plain');
    const nombre = request.body.nombre;
    const texto = request.body.texto;

    var fs = require('fs');

    fs.appendFile(nombre + '.md', texto, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    response.setHeader('Content-type', 'html/plain');
    response.send('Datos guardados con éxito');
    app.post('/', (request, response) => {
        console.log(request.body)
        let markDownText = request.body.text
        console.log(markDownText)
        let htmlText = md.render(markDownText)
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify({
            text: htmlText
        }))
    })
});
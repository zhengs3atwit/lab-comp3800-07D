const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');
const { dirname } = path;

const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/facts', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'facts.html'));
});

app.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'animals.html'));
});

app.get('/animals/:name', (req, res) => {
    const filePath = path.join(__dirname, 'views', 'animals', `${req.params.name}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Animal not found');
        }
    });
});

app.get('/animal', (req, res) => {
    const name = req.query.name?.trim().toLowerCase().replace(/\s+/g, "");
    const filePath = path.join(__dirname, 'views', 'animals', `${name}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Animal not found or spell correctly');
        }
    });
});

app.get('/filter', (req, res) => {
    const category = req.query.type;

    if (category === 'mammal') {
        return res.sendFile(path.join(__dirname, 'views', 'filter', 'mammals.html'));
    } else if (category === 'bird') {
        return res.sendFile(path.join(__dirname, 'views', 'filter', 'birds.html'));
    }

    res.sendFile(path.join(__dirname, 'views', 'animals.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static('public'));

// Root Route - Serves the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Facts Page Route
app.get('/facts', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'facts.html'));
});
// Facts (Path Parameter) 
app.get('/facts/:topic', (req, res) => {
    const topic = req.params.topic;
    const filePath = path.join(__dirname, 'views', 'facts', `${topic}.html`);
    
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Fact topic not found.');
        }
    });
});
// Animals Page route, Query String for search on animals.html
app.get('/animals', (req, res) => {
    const name = req.query.name?.trim().toLowerCase().replace(/\s+/g, "");
    
    if (!name) {
        return res.sendFile(path.join(__dirname, 'views', 'animals.html'));
    }

    const filePath = path.join(__dirname, 'views', 'animals', `${name}.html`);
    
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Animal not found.');
        }
    });
});

// Animal (Path Parameter)
app.get('/animals/:name', (req, res) => {
    const filePath = path.join(__dirname, 'views', 'animals', `${req.params.name}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Animal not found.');
        }
    });
});

// Filter Search Route
app.get('/filter', (req, res) => {
    const category = req.query.type;
    if (category === 'defaultshop') {
        return res.sendFile(path.join(__dirname, 'views', 'shop.html'));
    } else if (category === 'navigation') {
        return res.sendFile(path.join(__dirname, 'views', 'shop', 'navigation.html'));
    } else if (category === 'protection') {
        return res.sendFile(path.join(__dirname, 'views', 'shop', 'protection.html'));
    } else if (category === 'lighting') {
        return res.sendFile(path.join(__dirname, 'views', 'shop', 'lighting.html'));
    } else if (category === 'mammal') {
        return res.sendFile(path.join(__dirname, 'views', 'filter', 'mammals.html'));
    } else if (category === 'bird') {
        return res.sendFile(path.join(__dirname, 'views', 'filter', 'birds.html'));
    }

    res.sendFile(path.join(__dirname, 'views', 'animals.html'));
});

// General Search Route (Search across animals, shop items, and facts)
app.get('/search', (req, res) => {
    const name = req.query.q?.trim().toLowerCase().replace(/\s+/g, "");
    
    const animalPath = path.join(__dirname, 'views', 'animals', `${name}.html`);
    const shopPath = path.join(__dirname, 'views', 'shop', `${name}.html`);
    const factPath = path.join(__dirname, 'views', 'facts', `${name}.html`);

    res.sendFile(animalPath, (err) => {
        if (!err) return;
        res.sendFile(shopPath, (err) => {
            if (!err) return;
            res.sendFile(factPath, (err) => {
                if (!err) return;
                res.status(404).send('Item not found in animals, shop, or facts.');
            });
        });
    });
});

// Shop Page Route
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'shop.html'));
});

// Shop(Path Parameter)
app.get('/shop/:name', (req, res) => {
    const filePath = path.join(__dirname, 'views', 'shop', `${req.params.name}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Item not found.');
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

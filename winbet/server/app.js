const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());

app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();
    const result = db.getAllData();
    //console.log (result);
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));

})

app.get('/getParisPublic', (request, response) => {
    const db = dbService.getDbServiceInstance();
    const result = db.getParisPublic();
    //console.log (result);
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));

})

app.get('/getParisPremium', (request, response) => {
    const db = dbService.getDbServiceInstance();
    const result = db.getParisPremium();
    //console.log (result);
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));

})

// update
app.patch('/update', (request, response) => {
    const { id, name } = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateNameById(id, name);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.get('/search/:name', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchByName(name);
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

// create

app.post('/insert', (request, response) => {
    console.log("server get : " + JSON.stringify(request.body))
    const  name  = request.body.name;
    const  born  = request.body.born;
    const  password  = request.body.password;
    const  status  = request.body.status;
    const  email  = request.body.email;

    const db = dbService.getDbServiceInstance();
    console.log("Test"+name);
    const result = db.insertNewName(name, born, password, status, email);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

app.post('/insertMatch', (request, response) => {
    console.log("server get : " + JSON.stringify(request.body))
    const  match  = request.body.match;
    const  pronostic  = request.body.pronostic;
    const  cote  = request.body.cote;
    const  statut  = request.body.statut;
    const  type  = request.body.type;

    const db = dbService.getDbServiceInstance();
    const result = db.insertNewMatch(match, pronostic, cote, statut, type);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

app.post('/connect', (request, response) => {
    console.log("server get : " + JSON.stringify(request.body))
    
    const  password  = request.body.password;
    
    const  email  = request.body.email;

    const db = dbService.getDbServiceInstance();

    const result = db.connect(password, email);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});


app.listen(process.env.PORT, () => console.log('app is running'));

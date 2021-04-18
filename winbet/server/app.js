const express = require('express');
const app = express();
const cors = require('cors');

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

// create

app.post('/insert', (request, response) => {
    console.log("server get : " + request.body)
    const { name } = request.body;
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewName(name);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});


app.listen(process.env.PORT, () => console.log('app is running'));
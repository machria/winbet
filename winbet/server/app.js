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

app.post('/delete', (request, response) => {
    console.log("server get : " + JSON.stringify(request.body));
    console.log("DELETE            ///");
    const  iddel  = request.body.iddel;
    

    const db = dbService.getDbServiceInstance();
    console.log("Test"+iddel);
    const result = db.deleteUser(iddel);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});


app.listen(process.env.PORT, () => console.log('app is running'));
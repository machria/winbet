const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT
});

connection.connect((err) => {
	if(err){
		console.log(err.message);
	}
	console.log('Ma base de donnees status : ' + connection.state);
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }
    
    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM Membre;";
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    
    async insertNewName(name, born, password, status, email) {
        try {
            const dateAdded = new Date();
            console.log ("email : " + email);
            console.log ("password : " + password);
            console.log ("login : " + name);
            console.log ("born : " + born);
            console.log ("status : " + status);
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO Membre (pseudo,password,email,born_date, status) VALUES (?,?,?,?, ?);";
                

                connection.query(query, [name, password, email,born, status] , (err, result) => {
                    //console.log(result);
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
               // id : insertId,
                name : name, 
                born : born, 
                password : password, 
                status : status, 
                email : email
            };
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = DbService;
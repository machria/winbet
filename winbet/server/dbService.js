const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    
     async getParisPublic() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM Paris Where status = 'Public';";
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
    
    async getParisPremium() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM Paris Where status = 'Premium';";
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
            const encryptedPassword = await bcrypt.hash(password, saltRounds);
            password = encryptedPassword;
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
    
    async insertNewMatch(match, pronostic, cote, statut, type) {
        try {
            const dateAdded = new Date();
            console.log ("match : " + match);
            console.log ("pronostic : " + pronostic);
            console.log ("cote : " + cote);
            console.log ("statut : " + statut);
            console.log ("type : " + type);
    
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO `Paris`(`match`, `prono`, `cote`,`status`, `type`) VALUES (?,?,?,?,?);";
                

                connection.query(query, [match, pronostic, cote, statut, type] , (err, result) => {
                    //console.log(result);
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
               // id : insertId,
                match : match, 
                pronostic : pronostic, 
                cote : cote, 
                statut : statut, 
                type : type
            };
        } catch (error) {
            console.log(error);
        }
    }

    async connect(password, email){
         try {
            
            const insertId = await new Promise((resolve, reject) => {
                const query = "Select * from Membre where email = ? ;";
                
                let results = "";
                connection.query(query, [email] , (err, result) =>  {
                    //console.log(result);
                    if (err) reject(new Error(err.message));
                    resolve(result);
                    //console.log("PASSORW "+result[0].password);       
                return {
               // id : insertId,
                
                password : password 
                
            };

                })
            });
        console.log("PASSORW "+insertId[0].password);       

       const comparison = await bcrypt.compare(password, insertId[0].password);
if(comparison){  
console.log('OK');            
return {                
"code":200,                
"success":"login successful",                         
}         
}else{    
console.log('Combi mauvaise');                    
return{                 
"code":204,                 
"error":"Email and password does not match"            
}         
} 
 

        } catch (error) {
            console.log(error);
        }



    }

    async deleteUser(iddel) {
        try {
            console.log(iddel);
            console.log("DELETE");
            iddel = parseInt(iddel,10);
            const deleteId = await new Promise((resolve, reject) => {

                const query = "DELETE from Membre where id_membre = ? ;";
                

                connection.query(query, [iddel] , (err, result) => {
                    //console.log(result);
                    if (err) reject(new Error(err.message));
                    resolve(result.deleteId);
                })
            });
            return {
               // id : insertId,
                iddel : iddel 
                
            };
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = DbService;

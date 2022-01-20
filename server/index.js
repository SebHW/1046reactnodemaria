const express = require('express');
const app = express();
const mariadb = require('mariadb');
const cors = require('cors');

app.use(cors());
app.use(express.json())
/*
const db = mariadb.createConnection({
    user: "root",
    host: "localhost",
    //port: "3306",
    password: "",
    database: "employeesystem",
});
*/
const pool = mariadb.createPool({
    user: "root",
    host: "localhost",
    password: "",
    database: "employeesystem",
});
// Making the post request on the front end calls a route from express

app.post('/create', (req, res) => {
    //request something from the frontend
    //respond with something to the frontend
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const salary = req.body.salary;
    /*
    db.query(
        "INSERT INTO employees (name, age, country, position, salary) VALUES (?,?,?,?,?)",
        [name, age, country, position, salary], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        }
    );
    */
    pool.getConnection().then(conn => {
        conn.query(
            "INSERT INTO employees (name, age, country, position, salary) VALUES (?,?,?,?,?)",
            [name, age, country, position, salary], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Values inserted");
                }
            }
        )
        conn.close()
    })
});


app.get('/get', (req, res) => {
    pool.getConnection().then(cnn => {
        console.log("Successful connection to database");
        res.send("DB connection successful");
        cnn.query(
            "SELECT * FROM employees",
            (err, result) => {
                if(err){
                    res.send("Errors in the query")
                    console.log(err);
                }
                else {
                    res.send("No errors from the query")
                    res.send(result);
                }
            }
        )
        cnn.close()
    })
});


app.listen(3001, () => {
    console.log("yay server is running on port 3001");
});
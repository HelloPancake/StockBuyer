const express = require('express');
const { mongoClient } = require('./db')
const cors = require('cors');
const app = express();
const port = 3001;
const DB_NAME = 'stocks';

let db = null;
app.use(cors());

app.get('/', async (req, res) => {
    let response = await db.collection('users').find().toArray();
    res.json(response)
});

app.get('/users/:userid', async (req, res) => {
    let id = Number(req.params.userid)
    let projection = {firstName: 1, lastName: 0, email: 0}
    let response = await db.collection('users').findOne({id}, projection);
    console.log(response)
    res.json(response)
});

const seed = async () => {
    const connection = await mongoClient.connect();
    db = connection.db(DB_NAME);
    await db.dropCollection('users');
    await db.collection('users').insertMany([
        {firstName: "Richard", lastName: "Chen" , email: "richard@gmail.com", id: 0},
        {firstName: "Betty", lastName: "Wren" , email: "betty@gmail.com", id: 1},
        {firstName: "Alvin", lastName: "Zablan" , email: "Alvino@gmail.com", id: 2},
        {firstName: "Coffee", lastName: "Sandwich" , email: "covfefe@gmail.com", id: 3}
    ]);
}




seed();

// mongoClient.connect(function (err) {

//     if (err) {
//         console.log(err)
//     }
//     console.log(" Mongo DB connected successfully to server");

//     const db = mongoClient.db(DB_NAME);

//     db.collection('inserts').insertOne({ a: 1 }, function (err, r) {
//         if (err) {
//             console.log(err)
//         }
//         assert.equal(1, r.insertedCount);

//     mongoClient.close();
// });

app.listen(port, () => console.log(`Express running on ${port}!`));

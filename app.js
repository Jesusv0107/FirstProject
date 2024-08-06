const express = require('express');
const app = express();

const PORT = 3000;

//Query Parameters
app.get('/', (req, res) =>{

    const id = req.query.id;
    const username = req.query.username;

    res.send(`User ID: ${id}. Username: ${username}`);

});

app.get (`/products/:id`, (req ,res) =>{
const productid= req.params.id;
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);

});
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

//middleware
app.use((req, res, next) => {
console.log('Request received: ${req.method} ${req.url}');
next();
});


//router controller
app.get('/', (req, res, next) =>{
try{
res.send('Everything is okay!').status(200);
//throw new error('Something has gone wrong!');
}
catch(error){
 next(error);
}
});

app.listen(3000, () => {
console.log(`Server started on port ${PORT}`);
});
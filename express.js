const express = require('express')
const app = express()

app.get('/', function (req, res){
 res.header("requestId","Unknown");
 res.header("content-type","application/json");
 res.send('{"Name":"Vishal","Id":"1234"}');
});

app.get('/hello', (req, res) => res.send('Hello Vishal!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
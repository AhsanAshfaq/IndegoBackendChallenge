const express = require('express');

const app = express();
require('./user/user.js')(app);

app.get('/user', (req:any, res:any) => res.send('GET method'));
app.post('/user', (req:any, res:any) => res.send('POST method'));
app.delete('/user', (req:any, res:any) => res.send('DELETE method'));
app.put('/user', (req:any, res:any) => res.send('PUT method'));

module.exports = app;
var express = require('express');
var app=express();
// express: sirve para crear un micro entorno para servidores

app.get('/',function (req,res) {
    res.send('Hola mundo!')
});

app.listen(3000,function (err) {
    if(err) return console.log('Hubo un error'), process.exit(1);
    console.log('Escuchando en el puerto 3000')
})
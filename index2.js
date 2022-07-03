const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res) {
    res.send('<h1>hola mundo desde</h1>');
    res.end();
});

server.listen(3000, function() {
    console.log('server on port 3000'.red);
});

/*const holi = require('http');
const colors = require('colors');

const handleServer = function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });

    res.write('<h1>hola mundo desde</h1>');
    res.end();
}

const server = holi.createServer(handleServer)

server.listen(3000, function() {
    console.log('server on port 3000'.yellow)
});



/*const mol = require('os');
const file = require('fs');

file.readFile('./texto.txt', function(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log("holi");/*

/*file.writeFile('./texto.txt', 'linea uni', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('archivo creado');
});

console.log('ultima linea de codigo');


/*
console.log(mol.platform());
console.log(mol.release());
console.log('free mem: ', mol.freemem(), 'en bytes');
console.log('total mem: ', mol.totalmem(), 'en bytes');*/
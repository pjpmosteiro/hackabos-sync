'use strict';

const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const testRouter = require('./routers/tests-routers')

const app = express();


app.get('/api/pokemons', (req, res, next) => {
    const pokemon2 = {
        name: 'bulbasur',
        attacks: ['whip'],
        // Con undefined, parametro no se manda
    };
    const data = [{
        name: 'pikachu',
        attacks: ['attack1', 'attack2'],
    }, pokemon2, {
        name: 'charmander',
        attacks: ['fire ball'],
    }];
    res.send(data);
});

app.get('/api/pokemons/:name', (req, res, next) => {
    const pokemons = [{
        name: 'pikachu',
        attacks: ['attack1', 'attack2'],
    }, {
        name: 'bulbasur',
        attacks: ['whip'],
    }, {
        name: 'charmander',
        attacks: ['fire ball'],
    }];
    const { name } = req.params;
    console.log(name);

    debugger;
    /**
           * Cuando se nos da un nombre de pokemon, se busca en nustro array
           * el dato del pokemon.
           */
    const pokemonsFound = pokemons.filter((pokemon) => {
        if (pokemon.name === name) {
            return true;
        }

        return false;
    });


    console.log(pokemonsFound);
    if (pokemonsFound.length === 0) {
        res.status(404).send('Not Found');
    } else {
        res.send(pokemonsFound[0]);
    }
});

app.post('/api/pokemons', (req, res, next) => {
    const pokemonData = Object.assign({}, req.body);

    console.log('me llego el siguiente request body', pokemonData);
    /**
           * Simulamos insertar en una bbdd que siempre hay delay
           */
    setTimeout(() => {
        res.status(201).send();
    }, 2000);

    req.REQUEST_ID = '1234';
    next();
});

/**
 * middleware de ejemplo para hacer un console.log
 */
// app.use((req, res, next) => {
//    console.log('Recibi la request', req.REQUEST_ID);
// });

//
app.get('/api/proxy/pokemons', (req, res, next) => {
    /**
       * Request a la api de terceros para acceder al listado de pokemons
       */
    axios({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon',
    }).then((response) => {
        res.send(response.data);
    }).catch((err) => {
        console.error('error', err);
        res.status(500).send();
    });
});

app.get('/api/tests/test01', (req, res, next) => {
    console.log('Recibi los siguientes query params', req.query);

    res.send(req.query);
});


/**
 * Llamada a express para generar servidor en 8000
 */
app.listen(8000, () => {
    console.log('Server corriendo en el puerto 8000');
});

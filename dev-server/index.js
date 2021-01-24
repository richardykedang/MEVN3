//const express = require('express')
import express from 'express';
const app = express();
import { registerRoutes } from './routes';
import { setEnvironment } from './config/env';
import { connectToDB } from './config/db';

setEnvironment(app);
connectToDB();
registerRoutes(app);
const port = 3000

app.get('*', (req, res) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        return res.send(
            'Running server in development mode.'
        );
    } else {
        // Returns the main index file in production environment
        return res.sendFile('index.html', { root: __dirname + '/../dist/' });
    }
})

app.listen(port, () => {
    console.log('MEVN app listening on port 3000 in ' + process.env.NODE_ENV + ' mode!');
})
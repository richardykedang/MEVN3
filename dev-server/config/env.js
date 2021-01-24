import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

export function setEnvironment(app) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    console.log("setting dev enviroment");
    process.env.NODE_ENV = 'development';
    app.use(bodyParser.json()); // Allows parsing JSON from the client
    app.use(morgan('dev')); // Log HTTP Requests to the node console (for debugging purposes)
    app.use(cors()); // Enable Cross Origin Requests, since Vue.JS is on a different origin
    process.env.DB_URL = 'mongodb://Richardy:zySmzzUr48GuedDo@cluster0-shard-00-00.cal8v.mongodb.net:27017,cluster0-shard-00-01.cal8v.mongodb.net:27017,cluster0-shard-00-02.cal8v.mongodb.net:27017/Webhozz?ssl=true&replicaSet=atlas-i0chxy-shard-0&authSource=admin&retryWrites=true&w=majority';
    process.env.TOKEN_SECRET='my-development-secret';
}

function setProdEnv(app) {
    console.log("setting prod enviroment")
    process.env.NODE_ENV = 'production';
    process.env.DB_URL = 'mongodb://Richardy:zySmzzUr48GuedDo@cluster0-shard-00-00.cal8v.mongodb.net:27017,cluster0-shard-00-01.cal8v.mongodb.net:27017,cluster0-shard-00-02.cal8v.mongodb.net:27017/Webhozz?ssl=true&replicaSet=atlas-i0chxy-shard-0&authSource=admin&retryWrites=true&w=majority';
    process.env.TOKEN_SECRET='my-production-secret';
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../../dist'));
}
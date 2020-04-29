'use strict';

var config = module.exports;

config.server = {
    port: 3000
};

config.db = {
    user: 'root', 
    password: '',
    name: 'smarthome'
};

config.db.details = {
    host: 'localhost',
    port: 8889,      
    dialect: 'mysql'
};
'use strict';

const debug = require('debug')('ts:logger');

module.exports = {
    debug: (...args) => debug(...args), 
    info: (...args) => console.log(...args),
    warn: (...args) => console.log(...args),
    error: (...args) => console.error(...args),
};
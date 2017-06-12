'use strict';

function DepletedTicketsError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}

DepletedTicketsError.prototype = Object.create(Error);

function NoTicketsFoundError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}

NoTicketsFoundError.prototype = Object.create(Error);

function NotSignedInError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}

NotSignedInError.prototype = Object.create(Error);

module.exports = {
    DepletedTicketsError,
    NoTicketsFoundError,
    NotSignedInError,
};

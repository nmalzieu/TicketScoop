#!/usr/bin/env node

'use strict';
const main = require('../lib/main');
const isSignedIn = require('../lib/test-session').isSignedIn;
const logger = require('../lib/logger');

const chalk = require('chalk');
const argv = require('yargs')
    .command('start')
    .option('session', {
        alias: 's',
        required: true,
        describe: 'Session ID retrieved from your ticketswap.fr cookie',
    })
    .option('amount', {
        alias: 'n',
        default: 1,
        describe: 'The amount of tickets to reserve',
    })
    .demandOption('s', 'We need your session id to reserve tickets')
    .demandCommand(2)
    .help()
    .argv;

const options = {
    url: argv._[1],
    baseUrl: 'https://www.ticketswap.fr',
    amount: argv['n'],
    sessionID: argv['s'],
};

function mask(input) {
    let x = input.length - 6;
    return 'x'.repeat(x) + input.slice(x);
}

logger.info(`${chalk.green('TicketScoop')} now running with configuration:`);
logger.info([
    ` ${chalk.magenta('url')}       = ${options.url}`,
    ` ${chalk.magenta('amount')}    = ${options.amount}`,
    ` ${chalk.magenta('sessionID')} = ${mask(options.sessionID)}`,
    '',
].join('\n'))

isSignedIn(options)
    .then(() => main.run(options))
    .catch(error => {
        console.error([
            '',
            chalk.red('Execution of TicketScoop failed.'),
            'Please ask for help at https://github.com/matthisk/TicketScoop',
            '',
        ].join('\n'), error.stack);
    });

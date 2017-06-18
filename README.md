# TicketScoop

[![Build Status](https://travis-ci.org/matthisk/TicketScoop.svg?branch=master)](https://travis-ci.org/matthisk/TicketScoop)

This command line tool is used to automatically reserve ticketswap.com tickets

## Install

```bash
npm install ticketscoop -g
```

## Usage

Before you can use the command you need to sign in to TicketSwap using your browser.
Navigate to the ticketswap website and sign in. Once signed in you need to inspect your cookies 
and retrieve the `session` value this should be supplied to the `--session` command line argument.

After you have retrieved your session id you can run the command as follows:

```bash
$ ticketscoop start https://ticketswap.com/path/to/event --session <your_session_id>
```

The following options are available:

```
Options:
  -s, --session                                                       [required]
  -n, --amount                                                      [default: 1]
```

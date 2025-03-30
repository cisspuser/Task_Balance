# Task 1

 

## Pre-requisites
 
- [`Node.js`](https://nodejs.org) with corresponding version of [`npm` package manager](https://www.npmjs.com/):

    - to install `Node.js` and `npm`:
        - install `Node.js` and `npm` with `nvm` (**recommended**; a required version of Node.js can be found
          in `.nvmrc` file)
        - download and install `Node.js` and `npm` from [official site](https://nodejs.org)
    - to check whether `Node.js` is installed:

      ```
      $ node --version
      $ npm --version
      ```

- [`PostgresSQL`](https://www.postgresql.org/)
 

## Configuration

Configuration is done using environment variables. 

### Database

Make sure you have running PostgresSQL and set the `username`, `password` in config/config.json file  

## Installation

```bash
$ npm install
```

## Running the app in local

```bash
# migration
$ npm run migrate:up

# seed
$ npm run seed:up

# production mode
$ npm run start
```
 

## Lint

```bash
# check
$ npm run lint:check

# fix
$ npm run lint
```


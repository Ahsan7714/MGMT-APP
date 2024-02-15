const express = require('express');
require('dotenv').config();
const colors = require('colors');
const {graphqlHTTP} = require('express-graphql');
const port = process.env.PORT ||  3000;
const app = express();
const schema = require('./schema/schema');
const connectDB = require('./config/db');

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
    }));

app.listen (port, () => {
  console.log(`Server is running on port ${port}`);
});
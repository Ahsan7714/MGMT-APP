const express = require('express');
require('dotenv').config();
const colors = require('colors');
const {graphqlHTTP} = require('express-graphql');
const port = process.env.PORT ||  3000;
const app = express();
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();
app.use(
  cors()
);
app.use('/', (req, res) => {
  res.send('Hello World');
});
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
    }));

app.listen (port, () => {
  console.log(`Server is running on port ${port}`);
});
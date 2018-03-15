const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

app.use('/graphql', graphqlHTTP((req, res, gql) => ({
  schema,
  graphiql: dev,
  pretty: dev,
})));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on PORT: ${PORT}`);
});

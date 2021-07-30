const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const compression = require('compression');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

dotenv.config();

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({
  schema,
});

const app = express(),
  port = process.env.PORT || 8001;

app.use(compression());

const start = async () => {
  try {
    await server.start();

    server.applyMiddleware({
      app,
      path: '/graphql',
    });

    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    app.get('/', (req, res) => {
      res.status(200).send('Welcome !!!');
    });

    await new Promise((resolve) => app.listen({ port: port }, resolve));
    console.log(`Server running at ${port}`);
  } catch (error) {
    console.log('server crash!!!!');
  }
};

start();

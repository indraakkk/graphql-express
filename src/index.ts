import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';
import { UsersResolver } from './resolvers/User';

dotenv.config();

const port = process.env.PORT || 3000;

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const mongoose = await connect(`${process.env.DB_CONNECTION}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await mongoose.connection;

  const server = new ApolloServer({ schema });

  const app = express();

  server.applyMiddleware({ app });

  // app.get('/', (res) => {
  //   res.status(200).send('typescript + express + graphql + mongodb stacks');
  // });

  const service = app.listen({ port: port }, () => {
    console.log(process.env.DB_CONNECTION);
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:${port}`
    );
    console.log(`🚀 open graphql at ==> http://localhost:${port}/graphql`);
  });

  process.on('SIGTERM', () => {
    console.log('🔴 Received SIGTERM. Shutting down server...');
    service.close(() => {
      console.log('✅ Server closed.');
    });
    process.exit(0);
  });
};

main().catch((err) => {
  console.error(err, 'error');
});

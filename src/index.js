import { ApolloServer, gql } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import express from 'express';
import mongoose from 'mongoose';

  const StartServer = () => {
    
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
      });
      
      server.applyMiddleware({ app });
      // useNewUrlParser: true
      // process.env.ATLAS_PW
      mongoose.connect('mongodb+srv://user1:passwordxxx@cluster0.wlhbw.mongodb.net/db1?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
      );
      }).catch(err => {
          console.log(err);
      });
  }

  StartServer()
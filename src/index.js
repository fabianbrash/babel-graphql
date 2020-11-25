import { ApolloServer, gql } from 'apollo-server-express';
// import { typeDefs, resolvers } from './schema';
import express from 'express';

const app = express();

const typeDefs = gql `
  type Query {
      hello: String!
  }
`;

const resolvers = {
    Query: {
        hello: () => "hello"
    }
};

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
/* const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;*/

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  server.applyMiddleware({ app });
  
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );

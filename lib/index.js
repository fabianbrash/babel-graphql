"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Query {\n      hello: String!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var app = (0, _express["default"])();
var typeDefs = (0, _apolloServerExpress.gql)(_templateObject());
var resolvers = {
  Query: {
    hello: function hello() {
      return "hello";
    }
  }
}; // A schema is a collection of type definitions (hence "typeDefs")
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

var server = new _apolloServerExpress.ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
server.applyMiddleware({
  app: app
});
app.listen({
  port: 4000
}, function () {
  return console.log("\uD83D\uDE80 Server ready at http://localhost:4000".concat(server.graphqlPath));
});
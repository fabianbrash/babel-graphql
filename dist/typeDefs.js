"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Query {\n    hello: String!\n    cats: [Cat!]!\n  }\n\n  type Cat {\n      id: ID!\n      name: String!\n  }\n\n  type Mutation {\n      createCat(name: String!): Cat!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject()); // A schema is a collection of type definitions (hence "typeDefs")
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

exports.typeDefs = typeDefs;
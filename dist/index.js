"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _resolvers = require("./resolvers");

var _typeDefs = require("./typeDefs");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StartServer = function StartServer() {
  var app = (0, _express["default"])();
  var server = new _apolloServerExpress.ApolloServer({
    typeDefs: _typeDefs.typeDefs,
    resolvers: _resolvers.resolvers
  });
  server.applyMiddleware({
    app: app
  }); // useNewUrlParser: true

  _mongoose["default"].connect('mongodb+srv://user1:passwordxxx@cluster0.wlhbw.mongodb.net/db1?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(function () {
    app.listen({
      port: 4000
    }, function () {
      return console.log("\uD83D\uDE80 Server ready at http://localhost:4000".concat(server.graphqlPath));
    });
  })["catch"](function (err) {
    console.log(err);
  });
};

StartServer();
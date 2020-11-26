"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _Cat = require("./models/Cat");

var resolvers = {
  Query: {
    hello: function hello() {
      return "hello";
    },
    cats: function cats() {
      return _Cat.Cat.find();
    }
  },
  Mutation: {
    createCat: function createCat(_, _ref) {
      var name = _ref.name;
      var kitty = new _Cat.Cat({
        name: name
      }); //await kitty.save();

      console.log(kitty);
      return kitty.save();
    }
  }
}; //const kitty = new Cat({ name: 'Fits' });
//kitty.save()
//.then(() => console.log('meow'));

exports.resolvers = resolvers;
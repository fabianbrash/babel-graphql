import { Cat } from "./models/Cat";

export const resolvers = {
    Query: {
        hello: () => "hello",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: (_, {name}) => {
            const kitty = new Cat({ name });
            //await kitty.save();
            console.log(kitty)
            return kitty.save();
        }
    }
};

//const kitty = new Cat({ name: 'Fits' });
//kitty.save()
  //.then(() => console.log('meow'));

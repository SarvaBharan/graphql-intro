const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
  hello: String
}
`);

const rootValue = {
  hello: () => {
    return "Welcome to GraphQL";
  },
};

graphql({
  schema,
  source: "{ hello }",
  rootValue,
}).then((data) => console.log(data));

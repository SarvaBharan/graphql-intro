const { buildSchema } = require("graphql"),
  express = require("express"),
  app = express(),
  port = 3001,
  host = "localhost",
  { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
type Query {
  hello: String
}`);

const root = {
  hello: () => {
    return "Hey there!";
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.info(`Server started: http://${host}:${port}`);
});

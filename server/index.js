const { ApolloServer } = require('apollo-server');
const typeDefs = require('./Schema/schema');
const resolvers = require('./Resolvers/index');

let server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

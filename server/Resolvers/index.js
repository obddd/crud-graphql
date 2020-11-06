let localData = {};
const crypto = require('crypto');

const resolvers = {
  Query: {
    getMessage: () => {
      return 'Hello World!!!!';
    },
    getAllMessages: () => {
      return [{message: "test", id:"123"}, {message: "test2", id:"1234z"}]
    }
  },
  Mutation: {
    createMessage: (_, { input }) => {
      const id = crypto.randomBytes(10).toString('hex');
      console.log('id', id);
      localData[id] = { id, ...input.message };
      return { id, ...input };
    },
  },
};

module.exports = resolvers;

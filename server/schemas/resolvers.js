const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const UserData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("savedBooks");
        return UserData;
      }
      throw new AuthenticationError("Not logged in");
    },

    users: async () => {
      return User.find().select("-__v -password").populate("savedBooks");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("savedBooks");
    },
    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Book.find(params).sort({ title });
    },
    book: async (parent, { _id }) => {
      return Book.findOne({ _id });
    },
  },
};

module.exports = resolvers;

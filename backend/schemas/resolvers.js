// graphql/resolvers.js
const Users = require('../models/Users');

const resolvers = {
    Query: {
        getUsers: async () => {
            const users = await Users.find({});
            if (users.length === 0) {
                return {
                    users: [],
                    message: 'No users found',
                };
            }
            return {
                users,
                message: null,
            };
        },
    },

    Mutation: {
        createUser: async (_, args) => {
            const newUser = new Users(args);
            await newUser.save();
            return newUser;
        },
    },
};

module.exports = resolvers;

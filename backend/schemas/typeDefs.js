// graphql/typeDefs.js
const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type UserResponse {
  users: [User!]
  message: String
}

type Query {
  getUsers: UserResponse
}

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

module.exports = typeDefs;

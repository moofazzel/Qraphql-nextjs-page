import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
query GetUsers {
  getUsers {
    message
    users {
      email
      id
      name
    }
  }
}
`;

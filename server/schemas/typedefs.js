const { gql } = require('apollo-server-express');

type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]!
  }
  
  type Book {
    bookId: ID!
    // add other Book fields
  }
  
  type Auth {
    token: String!
    user: User!
  }
  
  type Query {
    getSingleUser(userId: ID, username: String): User
  }
  
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth!
    login(username: String, email: String!, password: String!): Auth!
    saveBook(input: SaveBookInput): User!
    deleteBook(bookId: ID!): User!
  }
  
  input SaveBookInput {
    bookId: ID!
    // other book fields
  }
  
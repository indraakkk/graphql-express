const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    getAllCategories: [Category]
  }

  type Category {
    id: ID
    name: String
    is_active: Boolean
  }

  extend type Mutation {
    createCategory(name: String, is_active: Boolean): Category
  }
`;

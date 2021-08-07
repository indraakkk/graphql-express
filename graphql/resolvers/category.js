const controller = require('../../controller/category');

module.exports = {
  Query: {
    getAllCategories: () => controller.getAll(),
  },
  Mutation: {
    createCategory: (_, args) => controller.create(args),
  },
};

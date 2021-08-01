const controller = require('../../controller/category');

module.exports = {
  Query: {
    getAllCategory: () => controller.getAll(),
  },
  Mutation: {
    createCategory: (_, args) => controller.create(args),
  },
};

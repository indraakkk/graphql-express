const Model = require('../models/category');

module.exports = {
  getAll: async () => {
    try {
      let datas = await Model.find();
      return datas;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async () => {},
  create: async (args) => {
    try {
      let data = await Model.create(args);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async () => {},
  destroy: async () => {},
};

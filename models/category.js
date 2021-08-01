const mongoose = require('mongoose');

let schema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    is_active: {
      type: Boolean,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      // new changes
    },
  }
);

module.exports = mongoose.model('category', schema);

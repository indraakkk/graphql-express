const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let schema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
    is_active: {
      type: Boolean,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('product', schema);

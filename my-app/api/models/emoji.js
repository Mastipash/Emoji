const mongoose = require('mongoose');

const emojiSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Название emoji не должено быть пустым.",
    unique: "Emoji с таким названием уже существует"
  },
  url: {
    type: String,
    required: "у emoji должна быть ссылка на изображение"
  },
  isDelete: {
    type: Boolean,
    default: false
  },
  isLike: {
    type: Boolean,
    default: false
  }
}, {
  toObject: {
    transform(doc, ret) {
      // remove the __v of every document before returning the result
      delete ret.createdAt;
      delete ret.updatedAt;
      delete ret.__v;
      return ret;
    }
  }
});

emojiSchema.statics.publicFields = ['title', 'url', 'isDelete', 'isLike'];

module.exports = mongoose.model('Emoji', emojiSchema);
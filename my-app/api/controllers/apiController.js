const mongoose = require('../models/mongoose');
const pick = require('lodash/pick');
const Emoji = require('../models/emoji');

async function loadEmojiById (ctx) {
  if (!mongoose.Types.ObjectId.isValid(ctx.params.emojiId)) 
    ctx.throw(404);

  ctx.emojiById = await Emoji.findById(ctx.params.emojiId);

  if (!ctx.emojiById) 
      ctx.throw(404);
}


async function getAllEmojis(ctx, next) {
  let emojis = await Emoji.find({isDelete: false});
  ctx.status = 200;
  ctx.body = emojis.map(e => e.toObject());
  await next(); 
}

async function getLikedEmojis(ctx, next) {
  let emojis = await Emoji.find({isLike: true});
  ctx.status = 200;
  ctx.body = emojis.map(e => e.toObject());
  await next(); 
}

async function likeEmoji(ctx, next) {
  await loadEmojiById(ctx);
  ctx.emojiById.isLike = true;
  await ctx.emojiById.save();
  ctx.body = ctx.emojiById.toObject();
  await next();
}

async function deleteEmoji(ctx, next) {
  await loadEmojiById(ctx);
  ctx.emojiById.isDelete = true;
  await ctx.emojiById.save();
  ctx.body = ctx.emojiById.toObject();
  await next();
}

async function unlikeEmoji(ctx, next) {
  await loadEmojiById(ctx);
  ctx.emojiById.isLike = false;
  await ctx.emojiById.save();
  ctx.body = ctx.emojiById.toObject();
  await next();
}

async function restoreEmoji(ctx, next) {
  await loadEmojiById(ctx);
  ctx.emojiById.isDelete = false;
  await ctx.emojiById.save();
  ctx.body = ctx.emojiById.toObject();
  await next();
}

async function getDeletedEmojis(ctx, next) {
  let emojis = await Emoji.find({isDelete: true});
  ctx.status = 200;
  ctx.body = emojis.map(e => e.toObject());
  await next(); 
}

async function createEmoji(ctx, next) {
  let emoji = await Emoji.create(pick(ctx.request.body, Emoji.publicFields));
  ctx.body = emoji.toObject();
  ctx.status = 201;
  await next();
}

module.exports = { getAllEmojis, createEmoji, likeEmoji, deleteEmoji, unlikeEmoji, restoreEmoji, getLikedEmojis, getDeletedEmojis };
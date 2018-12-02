const Router = require('koa-router'),
    KoaBody = require('koa-body'),
    { getAllEmojis, createEmoji, likeEmoji, deleteEmoji, unlikeEmoji, restoreEmoji, getLikedEmojis, getDeletedEmojis } = require('../controllers/apiController');

const router = new Router({
    prefix: '/api'
});

    router
        .get('/emojis',        getAllEmojis)
        .post('/createEmoji',   KoaBody(), createEmoji)
        .put('/emojis/:emojiId/like', KoaBody(), likeEmoji)
        .put('/emojis/:emojiId/delete', KoaBody(), deleteEmoji)
        .put('/emojis/:emojiId/unlike', KoaBody(), unlikeEmoji)
        .put('/emojis/:emojiId/restore', KoaBody(), restoreEmoji)
        .get('/emojis/liked', getLikedEmojis)
        .get('/emojis/deleted', getDeletedEmojis);
        

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
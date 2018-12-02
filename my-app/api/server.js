const Koa = require('koa'),
    cors = require('@koa/cors'),
    err = require('./helpers/error'),
    {routes, allowedMethods} = require('./routes'),

app = new Koa();

app.use(cors());
app.use(err);
app.use(routes());
app.use(allowedMethods());

const port = process.env.PORT || 3000;

const server = app.listen(port);

// http.createServer(app.callback()).listen(port, function () {
//     console.log('%s listening at port %d', port);
// });

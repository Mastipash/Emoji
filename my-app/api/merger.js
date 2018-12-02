const request = require('request');
const mongoose = require('./models/mongoose');

const Emoji = require('./models/emoji');

let options = {
  url: 'https://api.github.com/emojis',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    let data = JSON.parse(body);
    for (key in data) {
      Emoji.create({'title': key, 'url': data[key]}).then(data => {console.log(data);}).catch(e => {console.log(e);})
    }
  }
}

request(options, callback);
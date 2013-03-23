var app = require(global.base + '/config/application'),
config = require(global.base + '/config/config');

module.exports = exports = {
  show: function (req, res) {
    res.render('layouts/main', {
      env: {
        production: app.settings.env === 'production',
        development: app.settings.env === 'development'
      },
      config: JSON.stringify({
        domain: config.server.domain
      }),
      partials: {
        page: '../pages/loading'
      }
    });
  }
};
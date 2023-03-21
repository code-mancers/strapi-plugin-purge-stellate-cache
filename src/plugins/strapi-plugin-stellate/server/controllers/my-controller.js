'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('purge-stellate-cache')
      .service('myService')
      .getWelcomeMessage();
  },
});

'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-stellate')
      .service('myService')
      .getWelcomeMessage();
  },
});

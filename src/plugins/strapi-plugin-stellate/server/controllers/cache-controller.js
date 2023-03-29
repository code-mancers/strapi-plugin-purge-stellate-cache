"use strict";

module.exports = ({ strapi }) => ({
  async refreshcache(ctx) {
    const response = await strapi
      .plugin("strapi-plugin-stellate")
      .service("cacheService")
      .cacheService();
    if (response.error) {
      return ctx.internalServerError(`Server error: ${response.error}`);
    }

    ctx.body = response;
  },
});

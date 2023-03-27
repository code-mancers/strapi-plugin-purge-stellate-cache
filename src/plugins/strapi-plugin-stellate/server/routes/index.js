module.exports = [
  {
    method: "POST",
    path: "/cache/refreshcache",
    handler: "cacheController.refreshcache",
    config: {
      policies: [],
    },
  },
];

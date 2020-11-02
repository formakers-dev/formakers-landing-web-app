const config = {};

config.development = {
  serverBaseUrl: process.env.VUE_APP_SERVER_BASE_URL || "http://localhost:8080",
  port: process.env.VUE_APP_PORT || 3000,
  gtagId: process.env.GTAG_ID,
};

config.staging = Object.assign({}, config.development);
config.production = Object.assign({}, config.development);

module.exports = config[process.env.NODE_ENV];

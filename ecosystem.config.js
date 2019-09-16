'use strict';

module.exports = {
  apps: [
    {
      name: "app",
      script: "./bin/www",
      watch: false,
      exec_mode: "cluster",
      instances: 3,
      env: {
        "NODE_ENV": "production"
      },
      env_development: {
        "NODE_ENV": "development"
      }
    }
  ]
};

module.exports = {
  apps : [{
    script: 'src/app.js',
    name: 'MarketPlace',
    watch: true,
    cwd: '/Users/rfuosseu/workspace/Formations/MarketPlace',
    env: {
      PORT: 80,
      NODE_ENV: 'development'
    }
  }],

  deploy : {
    production : {
      user : 'rodrigue',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : '/var/www',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};

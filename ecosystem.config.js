module.exports = {
    apps: [{
      name: 'meucad',
      script: './app.js',
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        TOKEN: '',
      },
    }],
  };
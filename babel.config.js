const presets = [
    [
      '@babel/env', {
        targets: {
          chrome: '70',
          node: 10
        },
      },
    ],
  ]
  
  module.exports = { presets }
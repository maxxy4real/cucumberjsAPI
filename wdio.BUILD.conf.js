const path = require('path');

const { config } = require('./wdio.conf.js');

config.capabilities = [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--window-size=1280,800',
        ],
    },
}];

config.services = [
    [
        'chromedriver'
    ]
];
config.path = '/';

if (process.env.CI) {
    config.outputDir = path.join(__dirname, 'logs');
}

exports.config = config;
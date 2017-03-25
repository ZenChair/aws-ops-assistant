const chai = require('chai');
const expect = chai.expect;

const {defineSupportCode} = require('cucumber');

const ConfigLoader = require('../lib/config-loader');
const Context = require('../lib/context');

const configLoader = new ConfigLoader({fs: require('fs')});

defineSupportCode(({Given, When, Then}) => {

    let context;

    Given('I am on slack and ready to post a command comment', () => {
        return configLoader.load(__dirname + '/../../config.json')
            .then(config => {
                context = new Context({config});
            });
    });

    When('I post {stringInDoubleQuotes} comment', comment => {
        const slackApp = context.getAltSlackApp();
        return slackApp.postComment(comment);
    });

    Then('I should get a version number', () => {
        return delay(0.1).then(() => {
            const httpRequestStore = context.getHttpRequestStore();
            const lastRecord = httpRequestStore.getLastRequest();
            expect(lastRecord).to.eql('{"text":"0.0.1"}');
        });
    });

});

function delay(sec) {
    return new Promise(resolve => {
        setTimeout(resolve, sec * 1000);
    });
}

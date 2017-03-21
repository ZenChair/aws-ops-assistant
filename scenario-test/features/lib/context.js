
const fs = require('fs');
const ConfigLoader = require('./config-loader');
const FakeHttpClient = require('./fake-http-client');
const FakeHttpRequestStore = require('./fake-http-request-store');
const AltSlackApp = require('./alt-slack-app');

// TODO: Once we have a test environment, we can do an integration test
//       and remove FakeXxx classes with real implementation.
class Context {

    constructor({config}) {
        this._config = config;
    }

    _getHttpClient() {
        return new FakeHttpClient({
            notifyRequest: slackCallbackUrl => this._recordFakeNotification(slackCallbackUrl)
        });
    }

    getHttpRequestStore() {
        this._httpRequestStore = this._httpRequestStore || this._createHttpRequestStore();
        return this._httpRequestStore;
    }

    getAltSlackApp() {
        return new AltSlackApp({
            config: this._config,
            httpClient: this._getHttpClient()
        })
    }

    _createHttpRequestStore() {
        return new FakeHttpRequestStore();
    }

    _recordFakeNotification(slackCallbackUrl) {
        setTimeout(() => {
            if (slackCallbackUrl === this._config['slack.responseUrl']) {
                this.getHttpRequestStore().put('{"text":"0.0.1"}');
            }
        }, 10);
    }

}

module.exports = Context;

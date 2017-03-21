
const FAKE_AWS_OPS_ASSISTANT_ENDPOINT = "https://fake-aws-ops-assistant.zenchair.com/slack";

class FakeHttpClient {

    constructor({notifyRequest}) {
        this._notifyRequest = notifyRequest;
    }

    post(url, payload) {
        const isOpsAssistantUrl = url === `${FAKE_AWS_OPS_ASSISTANT_ENDPOINT}/assist-request`;
        const isOpsAssistantCommand = payload.command === '/oa';
        const isVersionRequested = payload.text === 'Tell me your version';
        if (isOpsAssistantUrl && isOpsAssistantCommand && isVersionRequested) {
            this._notifyRequest(payload.response_url);
        }
        return Promise.resolve();
    }

}

module.exports = FakeHttpClient;

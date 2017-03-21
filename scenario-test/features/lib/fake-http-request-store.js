
class FakeHttpRequestStore {

    constructor() {
        this._requests = [];
    }

    put(json) {
        this._requests.push(json);
    }

    getLastRequest() {
        return this._requests.slice(-1)[0];
    }

}

module.exports = FakeHttpRequestStore;

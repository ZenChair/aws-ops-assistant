
const REGEX_COMMAND = /^\/([a-zA-Z0-9_]+)\s+(.*)$/

class AltSlackApp {

    constructor(params) {
        this._config = params.config;
        this._httpClient = params.httpClient;
    }

    postComment(comment) {
        const command = this._parseAsCommand(comment);
        return command ? this._sendCommand(command) : Promise.resolve();
    }

    _parseAsCommand(comment) {
        const match = (comment || '').match(REGEX_COMMAND);
        return match && {
            command: match[1],
            text: match[2]
        };
    }

    _sendCommand(command) {
        const url = `${this._config.awsOpsAssistantEndpont}/assist-request`;
        const payload = this._composeCommandPayload(command);
        return this._httpClient.post(url, payload);
    }

    _composeCommandPayload(command) {
        return {
            token: this._config['slack.token'],
            team_id: this._config['slack.teamId'],
            team_domain: this._config['slack.teamDomain'],
            channel_id: this._config['slack.channelId'],
            channel_name: this._config['slack.channelName'],
            user_id: this._config['slack.userId'],
            user_name: this._config['slack.userName'],
            command: `/${command.command}`,
            text: command.text,
            response_url: this._config['slack.responseUrl'],
        };
    }

}

module.exports = AltSlackApp;

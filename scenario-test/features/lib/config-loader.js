
class ConfigLoader {

    constructor({fs}) {
        this._fs = fs;
    }

    load(filePath) {
        return new Promise((resolve, reject) => {
            this._fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) return reject(err);
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        });
    }

}

module.exports = ConfigLoader;

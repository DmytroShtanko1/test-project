let _data = {};

export class PullObject {
    static get(key) {
        return _data[key]
    }

    static set(key, value) {
        _data[key] = value;
        return this;
    }

    static delete(key) {
        delete _data[key];
    }
}
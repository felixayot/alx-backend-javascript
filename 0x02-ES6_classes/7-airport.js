export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    this.Object = `[object ${this._code}]`;
    return this.Object;
  }
}

export default class Time {
    constructor() {
        this.time = Date.now() / 1000;
    }

    UpdateTime() {
        this.deltaTime = (Date.now() / 1000) - this.time;
        this.time = Date.now() / 1000;
    }
}
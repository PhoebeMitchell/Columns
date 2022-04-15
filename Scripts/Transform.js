export default class Transform {
    constructor(parent) {
        this.parent = parent;
        if (parent != undefined) {
            parent.children.push(this);
        }
        this.children = [];
        this.x = 0;
        this.y = 0;
    }

    X() {
        return this.parent != undefined ? this.parent.X() + this.x : this.x;
    }

    Y() {
        return this.parent != undefined ? this.parent.Y() + this.y : this.y;
    }
}
import Transform from "./Transform.js"

export default class Gem {
    constructor(sprite, xPos, yPos) {
        this.transform = new Transform(xPos, yPos);
        this.sprite = sprite;
    }

    Draw(context) {
        this.sprite.Draw(context, this.transform.x, this.transform.y);
    }
}
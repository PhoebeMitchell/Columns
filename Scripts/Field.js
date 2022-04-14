import Position from "./Position.js"

export default class Field {
    constructor(width, height, pixelsPerUnit, xPos, yPos) {
        this.field = new Array(width).fill(new Array(height).fill(Position))
        this.pixelsPerUnit = pixelsPerUnit;
        this.width = width * pixelsPerUnit;
        this.height = height * pixelsPerUnit;
        this.xPos = xPos;
        this.yPos = yPos;
    }

    Draw(context) {
        context.fillRect(this.xPos, this.yPos, this.width * this.pixelsPerUnit, this.height * this.pixelsPerUnit);
    }
}
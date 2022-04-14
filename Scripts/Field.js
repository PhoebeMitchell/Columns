import Position from "./Position.js"
import Gem from "./Gem.js"
import Sprite from "./Sprite.js"
import Transform from "./Transform.js"

export default class Field {
    constructor(width, height, pixelsPerUnit, xPos, yPos) {
        this.transform = new Transform(xPos, yPos)
        this.field = [].fill([]);

        for (let i = 0; i < width; i++) {
            if (this.field[i] == undefined) {
                this.field[i] = [];
            }
            for (let j = 0; j < height; j++) {
                this.field[i][j] = new Position;
                this.field[i][j].gem = new Gem(new Sprite("../Sprites/Gems.png", i * pixelsPerUnit, 0, 16, 16, pixelsPerUnit, pixelsPerUnit), this.transform.x + i * pixelsPerUnit, this.transform.y + j * pixelsPerUnit);
            }
        }

        this.pixelsPerUnit = pixelsPerUnit;
        this.width = width;
        this.height = height;
    }

    Draw(context) {
        context.fillRect(this.transform.x, this.transform.y, this.width * this.pixelsPerUnit, this.height * this.pixelsPerUnit);
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                this.field[i][j].Draw(context);
            }
        }
    }
}
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
                this.field[i][j].gem = new Gem(new Sprite("../Sprites/Gems.png", i * 16, 0, 16, 16, pixelsPerUnit, pixelsPerUnit), this.transform.x + i * pixelsPerUnit, this.transform.y + j * pixelsPerUnit);
            }
        }

        this.pixelsPerUnit = pixelsPerUnit;
        this.width = width;
        this.height = height;
    }

    Draw(context) {
        context.fillRect(this.transform.x, this.transform.y, this.width * this.pixelsPerUnit, this.height * this.pixelsPerUnit);
        this.DrawGrid(context);
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                this.field[i][j].Draw(context);
            }
        }
    }

    DrawGrid(context) {
        const verticalSpacing = [0, 2, this.pixelsPerUnit - 4, 2];
        const horizontalSpacing = [this.pixelsPerUnit / 16];
        const color = "#9D989D";

        context.strokeStyle = color;
        context.setLineDash(verticalSpacing);

        context.beginPath();
        for (let x = 1; x < this.width; x++) {
            context.moveTo(this.transform.x + x * this.pixelsPerUnit, this.transform.y);
            context.lineTo(this.transform.x + x * this.pixelsPerUnit, this.transform.y + this.height * this.pixelsPerUnit);
        }
        context.stroke();

        context.setLineDash(horizontalSpacing);

        context.beginPath();
        for (let y = 1; y < this.height; y++) {
            context.moveTo(this.transform.x, this.transform.y + y * this.pixelsPerUnit);
            context.lineTo(this.transform.x + this.width * this.pixelsPerUnit, this.transform.y + y * this.pixelsPerUnit);
        }
        context.stroke();
    }
}
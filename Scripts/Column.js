import Gem from "./Gem.js"
import Transform from "./Transform.js"
import Field from "./Field.js"

export default class Column {
    constructor(parent, Color0, Color1, Color2) {
        this.transform = new Transform(parent);

        this.gems = [new Gem(this.transform, Color0), new Gem(this.transform, Color1), new Gem(this.transform, Color2)]
        for (let i = 0; i < this.gems.length; i++) {
            this.gems[i].transform.y = Field.pixelsPerUnit * i;
        }
    }

    Draw(context) {
        for (const gem of this.gems) {
            gem.Draw(context);
        }
    }
}
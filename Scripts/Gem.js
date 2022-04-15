import Transform from "./Transform.js"
import GemColors from "./GemColors.js"
import Sprite from "./Sprite.js"
import Field from "./Field.js"

export default class Gem {
    constructor(parent, Color) {
        this.transform = new Transform(parent);
        this.sprite = new Sprite("../Sprites/Gems.png", Color * 16, 0, 16, 16, Field.pixelsPerUnit, Field.pixelsPerUnit);
    }

    Draw(context) {
        this.sprite.Draw(context, this.transform.X(), this.transform.Y());
    }
}
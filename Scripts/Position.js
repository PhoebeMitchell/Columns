export default class Position {
    Draw(context) {
        if (this.gem != undefined) {
            this.gem.Draw(context)
        }
    }
}
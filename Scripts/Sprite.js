export default class Sprite {
    constructor(url, sX, sY, sWidth, sHeight, dWidth, dHeight) {
        this.isLoaded = false;
        this.image = new Image;
        this.image.src = url;
        this.sX = sX;
        this.sY = sY;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.dWidth = dWidth;
        this.dHeight = dHeight;
    }

    Draw(context, dX, dY) {
        if (!this.image.complete) {
            console.log(dY, "a");
            this.image.onload = () => this.DrawOnLoad(context, dX, dY);
            return;
        }
        console.log(dY, "b");
        this.DrawOnLoad(context, dX, dY);
    }

    DrawOnLoad(context, dX, dY) {
        console.log(dY, "c");
        context.drawImage(this.image, this.sX, this.sY, this.sWidth, this.sHeight, dX, dY, this.dWidth, this.dHeight);
    }
}
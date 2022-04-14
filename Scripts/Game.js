import Field from "./Field.js"

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var field = new Field(6, 13, 48, 100, 50);
field.Draw(context);

var image = new Image;
image.src = "../Sprites/Gems.png"
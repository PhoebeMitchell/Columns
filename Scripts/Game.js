import Field from "./Field.js"

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var field = new Field(6, 13, 6, 100, 50);
field.Draw(context);
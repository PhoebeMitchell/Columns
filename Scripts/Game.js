import Field from "./Field.js"
import Time from "./Time.js"

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var field = new Field(6, 13, 48, 100, 50);
var time = new Time;

Game();
function Game() {
    time.UpdateTime();
    context.clearRect(0, 0, canvas.width, canvas.height);
    field.Draw(context);
    requestAnimationFrame(Game);
}
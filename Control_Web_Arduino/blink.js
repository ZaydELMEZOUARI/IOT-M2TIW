const {Board, Led} = require("johnny-five");
const board = new Board();
board.on("ready", () => {
     const led = new Led(10);
     led.blink(500);
});
const express = require('express');
const five = require('johnny-five');


const app = express();
const port = 3000;

// Serve the HTML file for the website
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

// Set up the routes for the automatic and manual buttons
app.get('/automatic', (req, res) => {
  // Code to turn on the LED automatically based on light level
  if (luxmeter.value > 250) {
    led.off();
  } else {
    led.on();
  }
  res.send('Automatic mode activated');
});

app.get('/manual', (req, res) => {
  // Code to turn on the LED manually
  led.on();
  res.send('Manual mode activated');
});



const board = new five.Board({
  port: 'COM6'
});

let led;
let luxmeter;

board.on('ready', () => {
  // Define the LED pin
  led = new five.Led(13);

  // Define the Luxmeter pin
  luxmeter = new five.Sensor({
    pin: 'A0',
    freq: 250
  });
  
  luxmeter.on("data", function(){

    ldrvalue = (luxmeter.value /1024) *100;
    console.log(luxmeter.value);
    
    });

    const values = [];

    values.push(luxmeter.value);
    let sum = values.reduce((acc, val) => acc + val, 0);
    let avg = sum / values.length;
    console.log("avg : "+ avg);

    app.get('/ldr', (req, res) => {
        res.send(ldrvalue.toString());
        });

        app.get('/sensor', (req, res, next) => {
            res.json({
                sensor: parseFloat( ((luxmeter?.value / 1024) * 100)+'').toFixed(2)
            });
        });

  // Start the server
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

});

const { json } = require('d3');
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
  port: 'COM8'
});

let led;
let luxmeter;
const data = [];
let average = 0;
let ldrValue2 = 0;

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
    ldrValue2 = luxmeter.value;
    console.log(luxmeter.value);
    
    if (data.length === 10) {
      data.shift();
    }
    data.push(luxmeter.value);
    const sum = data.reduce((acc, val) => acc + val, 0);
    average = sum / data.length;
    console.log('Sensor value: ' + data + ', Average: ' + average);
    });
  
    app.get('/ldr', (req, res) => {
        res.send(ldrValue2.toString());
        });

    app.get('/sensor', (req, res, next) => {
        res.json({
          average: parseFloat( ((average / 1024) * 100)+'').toFixed(2)
         });
        });

  // Start the server
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

});

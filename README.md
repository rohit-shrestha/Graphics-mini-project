# Graphics-mini-project
Traffic light

Implementation:
This project is coded in java-script using P5.js as graphics library. The program has several parts . Firstly a class car is defined by mapping the coordinates. The car is then multiplied in numbers and the random value for velocity and color is defined for each of the car 

for (let i = 0; i < 8 ; i++) {
//correction
let car = new Car( 0 , height * 0.8, Math.random() * 3 + 1, color(Math.random() * 255, Math.random() * 255, Math.random() * 255));
cars.push(car); 
}

Then the status for traffic light is defined. The traffic light is then set to automatic on certain time interval
setInterval(() => {
if (light.status === "red") light.status = "green";
else if (light.status === "yellow") light.status = "red";
else if (light.status === "green") light.status = "yellow";
}, 1000 * 2)

The positioning of the center of gravity for the car this.x acts as major defining point for the coordinates of the car. The cars above generate in the start with random colors and velocities. And the move towards the end point. On the path the light decides for the vehicle to move or stop. 

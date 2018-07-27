let slider;
let cars = [], light;

class TrafficLight {
    constructor() {
        this.x = width * 0.90;
        this.y = height * 0.1;
        this.status = "green";
    }

    show() {
        fill(200);

        
        // Light Rectangle
        rect(this.x, this.y, 50, 160);
        
        if (this.status == "red") fill("#c0392b")
        else fill("#808e9b")        
        ellipse(this.x +25 , this.y + 30, 40, 40);
        
        if (this.status == "yellow") fill("#f1c40f")
        else fill("#808e9b")
        ellipse(this.x + 25, this.y + 80, 40, 40);

        if (this.status == "green") fill("#27ae60");
        else fill("#808e9b");
        ellipse(this.x + 25, this.y + 130, 40, 40);
    }
}

class Car {
    constructor(x, y, v, c) {
        this.x = x;
        this.color = c;
        this.y = y;
        this.wheel_radius = 25;
        this.velocity = v;
        this.hood_length = 25;
        this.front_length = 15;
        this.body_length = 150;
        this.body_width = 25;
        this.back_length = 55;
    }

    setVelocity(v) {
        this.velocity = v
    }

    move() {
        this.x += this.velocity;
    }

    show() {
        stroke("grey");

        // hood
        line(this.x - this.hood_length , height * 0.77, this.x + this.hood_length, height * 0.77 );
        line(this.x - this.hood_length, height * 0.77, this.x - this.hood_length - this.front_length, height * 0.80);
        line(this.x + this.hood_length, height * 0.77, this.x + this.hood_length + this.front_length, height * 0.80);
   
        // Body
        fill(this.color);
        rect(this.x - this.back_length, height * 0.80, this.body_length, this.body_width);

        // Wheels
        fill(25);
        ellipse(this.x - 30, height * 0.80 + this.body_width, this.wheel_radius, this.wheel_radius);
        fill(this.color);
        ellipse(this.x - 30, height * 0.80 + this.body_width, this.wheel_radius - 10, this.wheel_radius - 10);
        fill(25);
        ellipse(this.x + 50, height * 0.80 + this.body_width, this.wheel_radius, this.wheel_radius)
        fill(this.color);
        ellipse(this.x + 50, height * 0.80 + this.body_width, this.wheel_radius - 10, this.wheel_radius - 10)
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(0, 5, 2, 0.05);
    for (let i = 0; i < 8   ; i++) {
        //correction
        let car = new Car( 0 , height * 0.8, Math.random() * 3 + 1, color(Math.random() * 255, Math.random() * 255, Math.random() * 255));
        cars.push(car);        
    }
    light = new TrafficLight();

    setInterval(() => {
        if (light.status === "red") light.status = "green";
        else if (light.status === "yellow") light.status = "red";
        else if (light.status === "green") light.status = "yellow";
    }, 1000 * 2)
}

function draw() {
    background(25);

    // Road
    let asdf = 0.855
    line(0, height * asdf, width, height * asdf);
    for (let car of cars) {
        car.show();
       //correction needed
        if (car.x >= 0) {
            if (light.status !== "red" ) car.move();
        }

        if ( car.x - car.hood_length - car.front_length > width )
            car.x = - ( car.body_length - car.hood_length - car.front_length );
        
        if (car.x >= windowWidth) {
            cars.push(car);
        }
    }

    // Traffic light
    light.show();
}

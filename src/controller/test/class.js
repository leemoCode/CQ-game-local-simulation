class Car {
  constructor(color, speed, name) {
    this.color = color;
    this.speed = speed;
    this.name = name;
  }
}


class Truck extends Car {
  constructor(color, speed, name) {
    super(color, speed, name);

    this.color = 'black';
    this.container = true;
  }
}

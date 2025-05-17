const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("Area1: ", area);
radius = 4;
area = radius * radius * PI;
console.log("Area2: ", area);

function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}


area = 0;
area = circleArea(3);
console.log("Circle area1: ",area);
area = circleArea(4);
console.log("Circle area2: ",area);
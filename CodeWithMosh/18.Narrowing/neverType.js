function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        case "cone":
            return shape.height * shape.radius;
        default:
            var exhaustiveCheck = shape;
            return exhaustiveCheck;
    }
}
var rectangleOne = {
    kind: "rectangle",
    length: 10,
    width: 5
};
console.log(getArea(rectangleOne));

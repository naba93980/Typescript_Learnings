interface Circle {
    kind: "circle",
    radius: number
}
interface Square {
    kind: "square"
    side: number
}
interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

interface Cone {
    kind: "cone",
    height: number,
    radius: number
}

type Shape = Circle | Square | Rectangle | Cone;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        case "cone":
            return shape.height * shape.radius;
        default:
            const exhaustiveCheck : never = shape;
            return exhaustiveCheck;
    }
}

const rectangleOne: Rectangle = {
    kind : "rectangle",
    length: 10,
    width: 5
}

console.log(getArea(rectangleOne));

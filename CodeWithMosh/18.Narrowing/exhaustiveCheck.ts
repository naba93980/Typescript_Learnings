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

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side
    }
}
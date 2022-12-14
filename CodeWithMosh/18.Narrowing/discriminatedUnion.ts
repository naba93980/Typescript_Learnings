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

function getTrueShape(shape: Square | Circle ) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    shape.side * shape.side;
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    shape.side * shape.side;
}

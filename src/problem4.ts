// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


type Circle = {
    shape: "circle"
    radius: number;
}

type Rectangle = {
    shape: "rectangle"
    height: number;
    width: number;
}

type UnionShape = Circle | Rectangle;


const calculateShapeArea = (unionShape: UnionShape) : number =>{
    if(unionShape.shape === "circle"){
        const circleArea = Math.PI * unionShape.radius * unionShape.radius;
        return parseFloat(circleArea.toFixed(2));
    }
    else{
        const rectangleArea = unionShape.height * unionShape.width;
        return parseFloat(rectangleArea.toFixed(2));
    }
}


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

console.log(circleArea);
console.log(rectangleArea);
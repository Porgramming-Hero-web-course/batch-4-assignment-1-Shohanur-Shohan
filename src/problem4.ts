// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


type Circle = {
    radius: number;
}

type Rectangle = {
    height: number;
    width: number;
}

type ShapeUnion = Circle | Rectangle;


const calculateShapeArea = (shape: ShapeUnion) : number =>{
    if('radius' in shape){
        const circleArea = Math.PI * shape.radius * shape.radius;
        return parseFloat(circleArea.toFixed(2));
    }
    else{
        const rectangleArea = shape.height * shape.width;
        return parseFloat(rectangleArea.toFixed(2));
    }
}

const circle: Circle = {
    radius: 50,
}

const rectangle: Rectangle  = {
    height: 10,
    width: 29,
}


// Outputs 
console.log(calculateShapeArea(circle));  
console.log(calculateShapeArea(rectangle)); 
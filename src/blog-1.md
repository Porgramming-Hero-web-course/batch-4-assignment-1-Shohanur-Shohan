#Question The significance of union and intersection types in Typescript.

#1 What are Union Types?
    A union type allows a value to be one of several types in a variable or functions. It's like saying, "This can be either string type or number type or any other type."

-Union in variable Example:
    let value: string | number;

-Union in funciton Example:
    function Person(age: string | number): string | number {

    }

#2 What are Intersection Types?
    An intersection type combines multiple types into one place. It’s like saying, "This must have all the properties of string and number or any other type." Both types must be available or typescript will give error!

-Intersection Example:
    type Person = { name: string };
    type Employee = { employeeId: number };
    type Worker = Person & Employee;
    const john: Worker = { name: "John", employeeId: 123 };


#Key Takeaways
    1.Use union types for "either-or" scenarios.
    2.Use intersection types for "must-have-both" scenarios.
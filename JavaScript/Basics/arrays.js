// //creating an array
// var animalList = ['Bird', 'Tiger', 'Lion', 'Dog', 'Cat']

// //accessing the contents
// console.log(animalList[2]);

// // -------------------------------------------------------

// //Nested array
// var fruitList = ['Apples', 'Banana', 'Carrot', 'Guava', 'Grape']

// //Accessing the contents within nested array
// console.log(fruitList[0][1]);
// console.log(fruitList);

// //Adding unto the array
// add = fruitList.concat(["Orange", 'Litch', 'Pear'])
// console.log(add);

//Exercise 1
//given the array below
// var fruitList = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(fruitList);

// //1. remove banana from the array
// fruitList.shift();
// console.log(fruitList);

// //2. sort in the array in oder
// fruitList.sort();
// console.log(fruitList);

// //3. Add 'kiwi' to the end of the list
// fruitList.push("Kiwi");
// console.log(fruitList);

// //4. remove apple from the list
// fruitList.splice(0, 1);

// //5. reverse sort an array
// fruitList.reverse();
// console.log(fruitList);

// var fruitList2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(fruitList2[1][1][0]);

//Objects
var user = {
    name: "John",
    surname: "Smith",
    age: 34,
    hobby: "Coding",
    isMarried: false,
};

console.log(user);

//Accessing objects
user.name
user.surname
user.age
user.hobby

//Adding an item in the given object
user.favouriteFood = "Pizza"
console.log(user);


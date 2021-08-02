const _ = require("lodash")

const ver = _.VERSION
console.log(ver);   //prints the version of the Lodash library

let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);   //First element of array
console.log(`Last element: ${lel}`);    //last element of array
console.log(_.nth(words, 3));   //prints nth element
console.log(_.nth(words, -3));  //prints nth element

//The _.chunk function creates an array of elements split into groups the length of the specified size.
let c1 = _.chunk(words, 2);
console.log(c1);
let c2 = _.chunk(words, 3);
console.log(c2);

/* The _.slice method gets a slice from an array. It takes two indexes: the starting and ending index, 
where the starting index is inclusive and the ending is exclusive.*/
let c3 = _.slice(words, 2, 6);
console.log(c3);
let c4 = _.slice(words, 0, 5);
console.log(c4);

//_.sample function, we can pick a random element from an array.
let word = _.sample(words);
console.log(word);

//_.shuffle function shuffles a collection.
console.log(_.shuffle(words));
console.log(_.shuffle(words));
console.log(_.shuffle(words));
console.log(words);

// _.times executes the function n times.
_.times(5, () => {

    console.log("brave");
})

// _.delay function delays the execution of a function for the specified amount of milliseconds.
function message()
{
    console.log("Some message");
}
_.delay(message, 150);
console.log("Some other message");

//Lodash contains functions which determine the data type of a value.
let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

vals.forEach( (e) => {

    if (_.isNumber(e)) {
        console.log(`${e} is a number`);
    }

    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string');
    }

    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array');
    }

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');
    }

});

/* _.range function creates an array of numbers. The function accepts the start, end, and step parameters. */
let val1 = _.range(10);
console.log(val1);
let vals2 = _.range(0, 15);
console.log(vals2);

//Min and Max from array
let valss = [-3, 4, 0, 12, 43, 9, -12];
let min = _.min(valss);
console.log(min);
let max = _.max(valss);
console.log(max);

// _.sum function calculates the sum of array values.
let vals1 = [-2, 0, 3, 7, -5, 1, 2];
let sum = _.sum(vals1);
console.log("Sum of array is " + sum);

//_.curry function turns a normal function into a curried one.
function multiply(a, b, c) {

    return a * b * c;
}
let curried = _.curry(multiply);
let ret = curried(2)(3)(4);
console.log("Curry function "+ret);

//_.filter function returns an array of elements for which the predicate function returns true.
let numFilter = [4, -5, 3, 2, -1, 7, -6, 8, 9];
let pos_nums = _.filter(numFilter, (e) => e > 0);
console.log(pos_nums);

//https://zetcode.com/javascript/lodash/
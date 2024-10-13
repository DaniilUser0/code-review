/*function checkAge(age)
{
    age = '18';
    if(age < 18) console.log("you are not allowed");
    if(age >= 18) console.log("you are welcome!");
}
checkAge();
*/

function checkAge(age) 
{
    if(age < 18) console.log("you are not allowed");
    if(age >= 18) console.log("you are welcome!");
}
checkAge('23');

//Калькулятор

function calc(operation, a, b)
{
    if(operation === 'add') console.log(a + b);
 
    if(operation === 'multi') console.log(a * b);

    if(operation === 'subtract') console.log(a - b);
 }

calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);
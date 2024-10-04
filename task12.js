/*function calc(operation, a, b)
{
    if(operation === 'add') console.log(a + b);
 
    if(operation === 'multi') console.log(a * b);

    if(operation === 'subtract') console.log(a - b);
 }

calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);
*/
//Ваша задача: перепишите ваши ряды if else выражений (в калькуляторе) 
function calc(operation, a, b)
{
    switch(operation)
    {
    case 'add':
        console.log(a + b);
        break;
    case 'multi':
        console.log(a * b);
        break;
    case 'subtract':
        console.log(a - b);
        break;
    }
}
calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2); 
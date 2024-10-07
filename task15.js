//Вывести в консоль числа от 1 до 19 с помощью цикла
let i = 1;
while (i < 20) {
  console.log(i);
  i = i + 1;
}
//Сделать то же самое, но с проверкой условия после тела цикла (do ... while)
let n = 1;
do
{
    console.log(n);
    n = n + 1;
} while (n < 20)
//Переписать свои while циклы на циклы for
for (let k = 1; k < 20; k++)
{
    console.log(k);
}
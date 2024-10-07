/*1.Предупреждения погоды*/
const temperature = 15; 

if (temperature < 0) 
{
    console.log("Опасно холодно!");
}
if (temperature >= 0 && temperature < 5) 
{
    console.log("Очень холодно!");
}
if (temperature >=5 && temperature < 20) 
{
    console.log("Прохладно!");
}
if (temperature > 20) 
{
    console.log("Тепло!");
}

/*2.Система скидок*/
const money = 6500;

if(money < 1000)
{
    console.log(money);
}
if (money > 1000 && money < 5000)
{
    console.log(money * 0.95, "рублей")
}
if (money > 5000)
{
    console.log(money * 0.9, "рублей")
}

/*3.Разделение пользователей по возрасту*/
const age = 18;
const isAge = age;

if (age < 18) 
{
    console.log("Подросток", isAge ,"лет");
}
if (age >= 18 && age < 65) 
{
    console.log("Взрослый", isAge ,"лет");
}
if (age >= 65) 
{
    console.log("Пенсионер", isAge ,"лет");
}

/*4.Режим работы магазина*/
const time = 9;

if(time < 9)
{
    console.log("Магазин закрыт")
}
else if(time <= 18)
{
    console.log("Магазин открыт")
}
else
{
    console.log("Магазин закрыт")
}

/*5.Оценка результатов теста*/
const result = 89; 

if (result < 50) 
{
    console.log("Оценка неудачно");
}
if (result >= 50 && result <= 69) 
{
    console.log("Оценка удовлетворительно");
}
if (result >= 70 && result <= 89) 
{
    console.log("Оценка хорошо");
}
if (result >= 90 && result <= 100) 
{
    console.log("Оценка отлично");
}
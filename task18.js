const person = {
    name: "Victor",
    number: "89587642585",
    age: 40,
};
const product = {
    name: "Apple iPhone 15",
    brand: "Apple",
    price: 1200,
};

const clonePerson = structuredClone(person);
const cloneProduct = structuredClone(product);

clonePerson.name = "Maksim"; 
clonePerson.number = "89756824532";
clonePerson.age = 24;


cloneProduct.name = " Galaxy S24";
cloneProduct.brand = "Samsung";
cloneProduct.price = 1050;

console.log( person); 
console.log(clonePerson);

console.log(product);
console.log(cloneProduct);
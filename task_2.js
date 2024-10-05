const a =4400
let b =0
if (a>1000 && a<5000) {
    b=5;
}
if (a>5000) {
    b=10;
}
const c =(a-b*0.01*a)
console.log(c);
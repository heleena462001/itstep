console.log('Task 1')

var s = 12;
p = 4 * (s ** 0.5);

console.log(p)



console.log('Task 2')
a = 6;
b = 4;
c = 4;

if ((a == 0)&& (b == 0) && (c == 0)) {
    console.log("У нас нет треугольника")
}
else if ((a == b) && (b == c)) {
    console.log("Это равностороний треугольник")

}
else if (((a == b) && ( b!=c)) || ((a == c) && ( b!=a)) || ((b == c ) && (c!=a))){
    console.log('Это равнобедренный треугольник')
}
else if ((a!=b) && (c!=a) && (c!=b)){
    console.log('Это разносторонний треугольник')
}


console.log('Task 3')
a = 5;
b = 6;
с = 3;


if ((b + c > a) && (c + a > b) && (a + b > c)){
    console.log("Можно составить треугольник")
}
else  {
    console.log ('Нельзя составить треугольник')
}



console.log("Task 5")
o = 6;
i = 6;
sum = o + i;
if (sum % 2 == 0) {
    console.log(o * i)
}
else {
    (sum % 2 == 1)
    console.log( o / i)
}

console.log("Task 6")
var age = 13;
if (age < 17) {
    console.log("Ты молодой :)");
}
else if ((age >= 18) && (age <= 69))
{ 
    console.log("Ты взрослый")
}
else if (age > 70){
    console.log("Ты пожилой")
}



console.log("Task 6")
var r = 20;
storona = 4;
d = 2 * r;
if (d <= storona) {
    console.log("Круг вмещается в квадрат")
}
else if (d >= storona ** 0.5) {
    console.log("Квадрат вмещается в круг")
}
else  {
    console.log("Ничего не помещается")
}


console.log('Task 7')
var day = 10;
month = 2;
year = 2122;

if ((1 <= day <= 31) && (1 <= year <= 2022) && (1 <= month <= 12)) {
    console.log(day,".",month,".",year,"")
} else {
    console.log('no')
}



if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    console.log(`Год - ${year} - високосный`);
} else {
    console.log(`Год - ${year} - невисокосный`);
}



console.log("Task 10")
var x1 = 5;
    y1 = 2;
    x2 = 14;
    y2 = 6;
    r1 =3;
    r2 = 8;
D = (((x2 - x1) ** 0.5) + ((y2 - y1) ** 0.5)) **0.5

if ((D > r1 + r2) || (0 < D < r1 - r2)) {
    console.log("Окружности не пересекаются")
}
else if (D > r1 - r2){
    console.log("Окружности пересекаются")
}
else if ((D == r1 + r2) || (D == r1 -r2)) {
    console.log("Окружности касаются в одной точке")
}
else if (0 < D < r1 - r2) {
    console.log("Окружности не пересекаются")
}
else if (r1 - r2 < d < r1 + r2) {
    console.log("Окружности пересeкаются в 2 точках")
}
else{
    console.log("Окружности пересeкаются")
}


console.log("Task 12")

let suma = 0;
for (let i = 1; i <= 20; i++) {
    suma += i * 5
}
console.log(suma);





console.log('Task')
let otvet = 1;
for (hd = 10; hd <= 99; hd = hd + 2) {
    if (hd % 13 == 0) {
        otvet = otvet * hd;
    }
}
console.log(otvet)


console.log(" Task 15")
 let sr = 0;
 let aq = 1;
 ax = 1;

while (ax >= 10 && ax <= 99) {
    if (aq % 13 == 0 && aq % 2 !== 0) {
       sr = aq * ax
    }
    ax++;


}
console.log(sr)


console.log("Task")

for (i = 10; i <= 20; i++)
    console.log(i * i);
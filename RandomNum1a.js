/*Write a program in the following steps
a. Generates 10 Random 3 Digit number. */

for (i=1; i<=10; i++){
    let num = Math.floor(Math.random()*(999-100)+100);
    console.log(num);
}

let a = prompt('Enter the first Number: ');
let b = prompt('Enter the second Number: ');
 document.getElementById("aBefore").innerHTML=a;
 document.getElementById("bBefore").innerHTML=b;
let temp;
 
temp = a;
a = b;
b = temp;
document.getElementById("aAfter").innerHTML=a;
document.getElementById("bAfter").innerHTML=b;
console.log(`value of  first Number after swapping: ${a}`);
console.log(`value of b second Number after swapping: ${b}`);
const n = parseInt(prompt ('Please enter N ( must be an integer )'));
let firstMethodNum = findFibonacciNum(n);
let secondMethodNum = findFibonacci(n);
let thirdMethodNum =  findFibonacciArr(n);
alert('RESULT: first method - ' + firstMethodNum + '; second method - ' + secondMethodNum + '; third method - ' + thirdMethodNum);

 function findFibonacciNum (n) {
     if (n < 2) {
      return n;}
     else {
      return findFibonacciNum(n-1) + findFibonacciNum(n-2);
 }
 }
 
 function findFibonacci(n){
     let f1 = 0; let f2 = 1; let fn = 1;
        for (let i = 1; i < n; i++){
            fn =  f1 + f2;
            f1 = f2;
            f2 = fn;
        }
     return fn;
 }
 
 function findFibonacciArr(n){
     let arr = [0,1];
     let i = 2;
        while (i <= n){
            arr.push(arr[i-1] + arr[i-2]);
            i= i + 1;
        }
    return arr[n];
 }
 
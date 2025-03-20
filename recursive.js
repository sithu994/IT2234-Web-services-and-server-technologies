//write recursive function  to print number from 1 to n
function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
}
printNumbers(10);
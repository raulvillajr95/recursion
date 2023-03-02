// Create array of fibonacci numbers(plain loop)
function fibs(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }
  }
  return arr;
}
console.log(fibs(8));

function fibsRec(num, arr = [0, 1]) {
  if (num <= 2) {
    return arr.slice(0, num);
  } else {
    if (num > 2) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return fibsRec(num - 1, arr).concat(arr[num - 1]);
  }
}
// console.log(fibsRec(8));

// Create array of fibonacci numbers(plain loop)
function fibs(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (arr.length < 2) {
      arr.push(i);
    } else {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }
  }
  return arr;
}

console.log(fibs(8));

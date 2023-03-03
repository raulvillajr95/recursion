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
// console.log(fibs(8));

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

// Merge sort
// base could could be when array length reaches 1
// re-merging: by index is 1 less than the other
// [2,3,9,8,9,8,7,3]
// [2,3,9,8] | [9,8,7,3]
// [2,3] | [9,8] | [9,8] | [7,3]
// [2] | [3] | [9] | [8] | [9] | [8] | [7] | [3]
// [2, 3] | [8, 9] | [8, 9] | [3 , 7]
// [2, 3, 8, 9] | [3, 7, 8, 9]
// [2, 3, 3, 7, 8, 8, 9, 9]
function mergeSort(arr, arr2 = []) {
  if (arr.length <= 2) {
    console.log(arr, '<2');
    // use sorter() to sort comparing indexes
    return arr.sort((a, b) => a - b);
  } else {
    console.log(arr, 'else');
    return sorter(
      mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
      mergeSort(arr.slice(Math.floor(arr.length / 2)))
    );
  }
}
console.log(mergeSort([2, 1, 9, 8, 9, 10, 7, 80, 39, 392, 3]));

// Sort 2 arrays
// go by indeces compare 1 1 and the move on from the one moved
function sorter(
  arr1,
  arr2,
  counter1 = 0,
  counter2 = 0,
  sorted = [],
  counter = arr1.length + arr2.length - 1
) {
  // console.log(counter, 'top');
  if (arr1.length === 0 || arr2.length === 0) {
    if (arr1.length === 0) {
      console.log('arr1 empty', arr2);
      sorted = [...sorted, ...arr2];
      console.log(sorted, 'concat??', arr2);
    } else if (arr2.length === 0) {
      console.log('arr2 empty');
      // sorted.concat(arr1);
      sorted = [...sorted, ...arr1];
    }
    // console.log(counter, 'if');
    // console.log(arr1[0], arr2[0], 'if compare', counter);
    return sorted;
  } else {
    if (arr1[0] <= arr2[0]) {
      console.log('greater');
      sorted.push(arr1[0]);
      arr1.shift();
    }
    if (arr1[0] > arr2[0]) {
      console.log('less');
      sorted.push(arr2[0]);
      arr2.shift();
    }
    // console.log(arr1[0], arr2[0], 'else compare', counter);
    return sorter(arr1, arr2, counter1, counter2, sorted, counter - 1);
  }
}
// console.log(sorter([2, 2, 4, 7], [2, 5, 500]));

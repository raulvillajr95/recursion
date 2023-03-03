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
function mergeSorter(arr) {
  // sort 2 arrays into 1
  const sorter = (arr1, arr2, sorted = []) => {
    if (arr1.length === 0 || arr2.length === 0) {
      if (arr1.length === 0) {
        sorted = [...sorted, ...arr2];
      } else if (arr2.length === 0) {
        sorted = [...sorted, ...arr1];
      }
      return sorted;
    } else {
      if (arr1[0] <= arr2[0]) {
        sorted.push(arr1[0]);
        arr1.shift();
      }
      if (arr1[0] > arr2[0]) {
        sorted.push(arr2[0]);
        arr2.shift();
      }
      return sorter(arr1, arr2, sorted);
    }
  };

  const mergeSort = (arr) => {
    if (arr.length <= 2) {
      return arr.sort((a, b) => a - b);
    } else {
      return sorter(
        mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
        mergeSort(arr.slice(Math.floor(arr.length / 2)))
      );
    }
  };

  return mergeSort(arr);
}
console.log(
  mergeSorter([
    769, 75, 988, 51, 551, 462, 173, 428, 412, 864, 584, 452, 198, 480, 47, 368,
    955, 625, 844, 253, 458, 696, 246, 725, 548, 689, 282, 746, 201, 104, 625,
    894, 450, 621, 622, 671, 141, 335, 510, 542, 330, 959, 496, 412, 937, 716,
    594, 701, 613, 493, 937, 996, 473, 372, 421, 526, 171, 820, 638, 688, 935,
    412, 632, 207, 528, 522, 687, 745, 325, 400, 302, 116, 84, 838, 13, 274,
    344, 508, 778, 429, 861, 761, 513, 462, 285, 853, 166, 229, 145, 191, 25,
    387, 512, 411, 573, 947, 340, 932, 474, 66,
  ])
);

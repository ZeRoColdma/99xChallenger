function binarySearch(phoneBook, name) {
  let left = 0;
  let right = phoneBook.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let currentName = phoneBook[middle][1];

    if (currentName === name) {
      return phoneBook[middle][0];
    } else if (currentName < name) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return "Name not found";
}

const phoneBook = [
  [1234567890, "Sophia"],
  [2345678901, "Dannielle"],
  [3456789012, "Carlos"],
  [4567890123, "Levi"],
  [5678901234, "Bruno"],
];

console.log(binarySearch(phoneBook, "Levi"));

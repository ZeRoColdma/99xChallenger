function processingBucktOfPain(image, x, y, oldColor, newColor) {
  if (
    x < 0 ||
    x >= image.length ||
    y < 0 ||
    y >= image[0].length ||
    image[x][y] !== oldColor
  ) {
    return;
  }
  image[x][y] = newColor;

  processingBucktOfPain(image, x - 1, y, oldColor, newColor);
  processingBucktOfPain(image, x + 1, y, oldColor, newColor);
  processingBucktOfPain(image, x, y - 1, oldColor, newColor);
  processingBucktOfPain(image, x, y + 1, oldColor, newColor);
}

let image = [
  [".", "#", "#", "#", ".", "."],
  [".", "#", ".", ".", "#", "."],
  [".", "#", "#", "#", ".", "."],
  [".", "#", ".", ".", ".", "."],
];

processingBucktOfPain(image, 1, 1, "#", "O");
console.log(image.join(","));

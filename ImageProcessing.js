function colorProcess(image, x, y, newColor) {
  const currentColor = image[y][x];
  if (currentColor === newColor) return;
  image[y][x] = newColor;
  if (x > 0 && image[y][x - 1] === currentColor)
    colorProcess(image, x - 1, y, newColor);
  if (x < image[0].length - 1 && image[y][x + 1] === currentColor)
    colorProcess(image, x + 1, y, newColor);
  if (y > 0 && image[y - 1][x] === currentColor)
    colorProcess(image, x, y - 1, newColor);
  if (y < image.length - 1 && image[y + 1][x] === currentColor)
    colorProcess(image, x, y + 1, newColor);
}

let image = [".###..", "#..#.", ".###..", "#...."];
colorProcess(image, 1, 1, "*");
console.log(image);

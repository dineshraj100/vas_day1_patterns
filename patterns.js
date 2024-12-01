function rightAngledTriangle(rows) {
  console.log("Right Angled Triangle");
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }
  console.log("\n");
}

function pyramid(rows) {
  console.log("Pyramid");
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
  console.log("\n");
}

function diamond(rows) {
  console.log("Diamond");
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }

  for (let i = rows - 1; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
  console.log("\n");
}

function inverseRightAngledTrianle(rows) {
  console.log("Inverse Right Angled Triangle");
  for (let i = rows; i >= 1; i--) {
    console.log("*".repeat(i));
  }
  console.log("\n");
}

function inversePyramid(rows) {
  console.log("Inverse Pyramid");
  for (let i = rows; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
  console.log("\n");
}

function square(rows) {
  console.log("Square");
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(rows)); //Check the output
  }
  console.log("\n");
}

function hollowSquare(rows) {
  console.log("Hollow Square");
  for (let i = 1; i <= rows; i++) {
    if (i === 1 || i === rows) {
      console.log("*".repeat(rows));
    } else {
      let spaces = " ".repeat(rows - 2);
      console.log("*" + spaces + "*");
    }
  }
  console.log("\n");
}

function generatePattern(rows) {
  rightAngledTriangle(rows);
  pyramid(rows);
  diamond(rows);
  inverseRightAngledTrianle(rows);
  inversePyramid(rows);
  square(rows);
  hollowSquare(rows);
}

const rows = 5;
generatePattern(rows);

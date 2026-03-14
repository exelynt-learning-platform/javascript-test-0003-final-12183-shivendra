const ROWS = 6;
for (let i = 1; i <= ROWS; i++) {
let row = "";
for (let j = 1; j <= i; j++) {
const digit = (i + j) % 2 === 0 ? 1 : 0;
row += (j === 1 ? "" : " ") + digit;
  }
console.log(row);
}

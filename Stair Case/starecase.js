"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    for (let k = i + 1; k < n; k++) {
      arr.push(" ");
    }
    for (let j = n - i - 1; j < n; j++) {
      arr.push("#");
    }
    for (let c of arr) process.stdout.write(c);
    console.log("");
    arr.length = 0;
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  staircase(n);
}

"use strict";

const fs = require("fs");

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function sumOfUpperDiagonal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i][i];
  return sum;
}
function sumOfDownDiagonal(arr) {
  let sum = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--)
    sum += arr[i][j];
  return sum;
}
function diagonalDifference(arr) {
  const difference = sumOfUpperDiagonal(arr) - sumOfDownDiagonal(arr);
  return Math.abs(difference);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}

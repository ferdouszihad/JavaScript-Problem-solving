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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const len = arr.length;
  let pos = 0,
    neg = 0,
    zero = 0;
  for (let num of arr) {
    if (num == 0) zero++;
    else if (num > 0) pos++;
    else if (num < 0) neg++;
  }
  pos /= len;
  neg /= len;
  zero /= len;
  return [pos, neg, zero];
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const solution = plusMinus(arr);

  for (let s of solution) {
    console.log(s.toFixed(6));
  }
}

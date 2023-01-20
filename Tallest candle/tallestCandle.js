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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function findtallest(arr) {
  let tall = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > tall) tall = arr[i];
  }
  return tall;
}

function countN(arr, num) {
  let countValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) countValue++;
  }
  return countValue;
}
function birthdayCakeCandles(candles) {
  const tall = findtallest(candles);
  const count = countN(candles, tall);
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const candlesCount = parseInt(readLine().trim(), 10);

  const candles = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((candlesTemp) => parseInt(candlesTemp, 10));

  const result = birthdayCakeCandles(candles);

  ws.write(result + "\n");

  ws.end();
}

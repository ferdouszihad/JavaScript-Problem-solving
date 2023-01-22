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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function count(item, ar) {
  let c = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == item) {
      c++;
      ar.splice(i, 1);
    }
  }
  return c;
}

function sockMerchant(n, ar) {
  let s = 0;
  while (ar.length > 0) {
    let num = ar[0],
      c = 0;
    console.log(ar.join());
    for (let i = 0; i < ar.length; i++) {
      if (ar[i] == num) {
        ar.splice(i, 1);
        i--;
        c++;
      }
    }
    console.log(c);
    s = s + Math.floor(c / 2);
    c = 0;
  }
  return s;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}

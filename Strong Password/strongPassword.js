function checkUpper(str) {
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (!isNaN(ch) || checkSpecial(ch)) continue;
    let chU = ch.toUpperCase();
    if (ch == chU) {
      return true;
    }
  }
  return false;
}

function checkLower(str) {
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (!isNaN(ch) || checkSpecial(ch)) continue;
    let chU = ch.toLowerCase();
    if (ch == chU) {
      return true;
    }
  }
  return false;
}

function checkDigit(str) {
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (!isNaN(ch)) return true;
  }
  return false;
}

function checkSpecial(str) {
  let spc = "!@#$%^&*()-+";
  spc = spc.split("");
  for (let special of spc) {
    if (str.includes(special)) {
      return true;
    }
  }
  return false;
}

function minimumNumber(n, password) {
  let sum = 0;
  if (!checkLower(password)) sum++;
  if (!checkUpper(password)) sum++;
  if (!checkSpecial(password)) sum++;
  if (!checkDigit(password)) sum++;
  if (sum + password.length < 6) {
    sum += 6 - sum - password.length;
  }
  console.log(sum);
}

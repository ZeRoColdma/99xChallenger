function checkIfIsPalindrome(str) {
  let regex = /[\W_]/g;
  let lowcase = str.toLowerCase().replace(regex, "");
  let phrase = lowcase.split("").reverse().join("");

  phrase === lowcase
    ? console.log("It's a palindrome")
    : console.log("It's not a palindrome");
}

checkIfIsPalindrome("HANNAH");

var word = prompt("Give me a word?");

if (word === "") {
  alert("At least something please.");
} else if (palindrome(word)) {
  alert("It is a palindrome!");
} else {
  alert("It is not a palindrome!");
}

function palindrome(word) {
  var reverse = "";

  for (var i = word.length; i > 0; i--) {
    reverse += word[i-1];
  }
  console.log(reverse);

  if (word === reverse) {
    return true;
  } else {
    return false;
  }
}

// location.reload();

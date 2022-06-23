function isPalindrome(word) {
  // Write your algorithm here
}

/* 
   IS A PALINDROME FUNCTION TAKE A STRING INPUT
   convert string into lowercase
   FIND LENTH OF A STRING
   LOOP THROUGH HALF OF THE STRING
      CHECK IF FIRST AND LAST STRING IS NOT SAME
       RETURN FALSE
    ELSE
    RETURN TRUE
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

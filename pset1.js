/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 // ALWAYS TEST YOUR CODE!!!
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/
 const makeEven = (str) => {
     if (str.length % 2 === 0) {
        return str;
     } else {
        return str + '#';
     }
 }

 console.log(makeEven('taq'), 'taq#');
 console.log(makeEven('john'), 'john');


/* 2
    @func getLastChar
    @param {string} str // I change (str) to my name 'steven'
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/
const getLastChar = str =>{
    const lastChar = str.charAt(str.length -1);
    return lastChar;
}

console.log (getLastChar('str'));

//text
const getLastChar = str =>{
return "text";
}
console.log (getLastChar('taq'))
// results in my last letter of my name 

const name = 'steven';
name[0]
name[1]
name[2]


// Did things multiple times for practice 
/*@func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
 @example - getLastChar('taq'); // 'q'
*/

 const getlastChar = (str) =>{
     const lastIndex = ( str.length -1);
     return str[lastIndex]
 }
 
console.log (getLastChar('str'));

// Did things multiple times for practice 
/*@func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
 @example - getLastChar('taq'); // 'q'

 */

const getlastChar = (str) =>{
const lastIndex =(str.length -1);
return str[lastIndex]
}

console.log getlastChar('taq')


/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/

 const get3rdChar = str =>{
     if ( SafeArray.length < 3){
         return "not enough characters";
     }
    return 
 }
/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/
 const get3rdCharFromEnd = str =>{
     if (str.length < 3) return "not enough characters"

     // return str.charAt
 }
/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/
//  (.slice gets first character)



/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/


/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/


/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

/* 12
    @func strMasher
    @param {string} str1 (name the param str1)
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
   @example - capitalLast('hello', 'wrold'); // "helwroldlo"
   // 
*/


///////////////////////////////////////////////////
const stMasher = (str1, str2) => {
    const middleIndex = math.ceil(str1.length / 2);

    const firstHalf = str1.slice(0,2)
    const secondHalf =str1.slice(2,4);

    return firstHalf + str2 + secondHalf;
}

console.log (strMasher('help','me'),'hemelp');
console.log (strMasher('hello','world'), 'helwroldlo');

//-----------------------------------
const makeEven = str => {
    //store number of characters in str
    const numChars = str.length; 

    //check if number of characters is even 
    if (numChars % 2 === 0) {
        return str;
    }
    // triple "equal" sign checks same "type" and "value"

    // stack trace tells you the error in your code, by tracing dowm the line to find the error
    //add # IF above is false 
     return str "#"; //"odd"+ "#" => "odd#"
    return "this is a sample str"
}
console.log (makeEven('hello')) // this complete the str
console.log (makeEven('odd'))
console.log (makeEven ('even'))
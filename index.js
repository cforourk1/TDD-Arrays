/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T} the first element of the array
 *
 * @example
 * getFirst([1,2,3]); // 1
 * @example
 * getFirst(["a", "b", "c"]); // "a"
 * @example
 * getFirst([true,false,true]); // true
 */
export function getFirst(array) {
// returning 0 because thats where the first element starts
    return array[0]
}

//function 2

/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T} the last element of the array
 *
 * @example
 * getLast([1,2,3]); // 3
 * @example
 * getLast(["a", "b", "c"]); // "c"
 * @example
 * getLast([true,false,true]); // true
 */
export function getLast(array) {
// Array length minus one gets us the last one in the line
  return array[array.length - 1]
}

/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T[]} an array containing the first and last elements of the given array
 * @returns {T[]} an empty array if the input is empty
 * @returns {T[]} the same array if the input only contains one element
 *
 * @example
 * getFirstLast([1,2,3]); // [1,3]
 * @example
 * getFirstLast([]); // []
 * @example
 * getFirstLast([42]); // [42]
 */

export function getFirstLast(array) {
// if length is 0 return 0
  if (array.length === 0) {
  return [];
//if array has one element return array
} else if (array.length === 1) {
  return array;
} else {
// get the first and last and return together
  return [array[0], array[array.length - 1]];
}
}


//function 4

/**
 * @param {string} str1 - the first string
 * @param {string} str2 - the second string
 * @returns {boolean} whether the first letters of both strings are the same
 * @returns {boolean} false if either string is empty
 *
 * @example
 * sharesFirstLetter("apple", "apricot"); // true
 * @example
 * sharesFirstLetter("banana", "berry"); // true
 * @example
 * sharesFirstLetter("cat", "dog"); // false
 */

export function sharesFirstLetter(str1, str2) {
    if (str1.length === 0 || str2.length === 0) {
      return false;
/* I thought at first I was feeding it too many operators but the issue was brackets - comparing if string length is greater than 0 and first elm the same
*/
    } else if (str1.length > 0 && str2.length > 0 && str1[0] === str2[0]) {
      return true;
    } else {
      return false;
    }
}

// function 5

/**
 * @param {number[]} numbers - an array of numbers
 * @returns {number[]} a new array with each number multiplied by 5
 *
 * @example
 * quintuple([1,2,3]); // [5,10,15]
 * @example
 * quintuple([0,4]); // [0,20]
 * @example
 * quintuple([]); // []
 */
export function quintuple(numbers) {
  let result = [];
// empty array to return result into
  for (let i = 0; i < numbers.length; i++) {
// push new numbers into array
  result.push(numbers[i] * 5)
  }
  return result;
}


//function 6

/**
 * There is a general rule for making nouns plural in English:
 * Add "s" to the end of the word, unless the word already ends with "s",
 * in which case add "es" instead.
 *
 * Hint: Look up `endsWith` on MDN!
 *
 * @param {string[]} - an array of singular nouns
 * @returns {string[]} an array of the plural forms of those nouns
 *
 * @example
 * pluralize(["cat", "dog"]); // ["cats", "dogs"]
 * @example
 * pluralize(["bus", "glass"]); // ["buses", "glasses"]
 * @example
 * pluralize([]); // []
 */
export function pluralize(words) {
  let result = [];
// empty array to return result into
  for (let i = 0; i < words.length; i++) {
// I had the wrong syntax here push words end with s with es
    if (words[i].endsWith('s')) {
    result.push(words[i] + "es");
  } else {
  result.push(words[i] + "s")
  }
}
  return result;
}

//function 7

/**
 * @param {boolean[]} attendance - an array representing student attendance
 * - true = student is present
 * - false = student is absent
 * @returns {number} the number of students present
 *
 * @example
 * countAttendance([true, false, true]); // 2
 * @example
 * countAttendance([false, false]); // 0
 * @example
 * countAttendance([]); // 0
 */
export function countAttendance(attendance) {
  let result = 0;
// empty array to return result into
  for (let i = 0; i < attendance.length; i++) {
// I had the wrong syntax here again! needed ===
    if (attendance[i] === true) {
    result += 1;
  }
  }     return result
}

//Function 8


/**
 * @param {string[]} sentence - an array of words
 * @returns {string} the first longest word in the sentence
 * @returns {null} null if the sentence is empty
 *
 * @example
 * getLongestWord(["sphinx", "of", "black", "quartz"]); // "sphinx"
 * @example
 * getLongestWord([]); // null
 * @example
 * getLongestWord(["a", "ab", "abc"]); // "abc"
 */

export function getLongestWord(sentence) {
let result = null;
//start with result as null and then compare if it is 0
if (sentence.length === 0) {
       return null
} for (let i = 0; i < sentence.length; i++) {
  // iterator to loop throuhg the array
  if (result === null || sentence[i].length > result.length) {
/*if the result is null or the element length is greater than the result length - return next longest word
*/
    result = sentence[i]
}
}
    return result
}

//function 9

/**
 * @param {string[]} playlist - an array of song titles
 * @param {string} song - the name of a song to find
 * @returns {number} the index of the song in the playlist
 * @returns {number} -1 if the song is not found
 *
 * @example
 * findSong(["Midnight Drive", "Golden Skies", "Neon Dreams"], "Golden Skies"); // 1
 * @example
 * findSong(["Midnight Drive", "Golden Skies", "Neon Dreams"], "Afternoon Drink"); // -1
 * @example
 * findSong([], "Midnight Drive"); // -1
 */
export function findSong(playlist, song) {
for (let i = 0; i < playlist.length; i++) {
// iterator to loop throuhg the array and find if the song is in playlist
  if (playlist[i] === song) {
      return i;
   }
}
  return -1
}


/**
 * @param {string[][]} map - a 2D array in which each element is a string that
 *  represents something in the area, such as "tree", "pigeon", "lamp", or "guard"
 * @returns {number[]} the [x,y] coordinates of the "spy"
 * @returns {null} null if the spy is not found
 *
 * @example
 * findSpy([["tree","spy"],["lamp","guard"]]); // [0,1]
 * @example
 * findSpy([["tree","lamp"],["spy","guard"]]); // [1,0]
 * @example
 * findSpy([["tree","lamp"],["pigeon","guard"]]); // null
 */
export function findSpy(map) {
// outerloop to look at length and count
for (let i = 0; i < map.length; i++) {
// inner loop to count
  for (let j = 0; j < map[i].length; j++)
// if coordinates match 
  if (map[i][j] === "spy") {
      return [i, j];
   }
}
  return null
}

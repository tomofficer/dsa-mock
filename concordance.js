let lines = [
  'This is a test yes IT IS, a very splendid test indeed.',
  'if you would like to take this test, please reach out to me.',
  'Incredible, the man said, when can I take this HERE TEST say YOU me?',
  'Oh sir, please come to thee and take this here test indeed!',
  'This is the final test, the final countdown, so please sir, take the damn test already.',
];

const map = {};

lines.forEach((line, index) => {
  line = line.toLowerCase();
  let words = line.replace(/[.,?!]/g, '').split(' ');

  words.forEach((word) => {
    if (map[word]) {
      if (!map[word].includes(index)) {
        map[word].push(index);
      }
    } else {
      map[word] = [index];
    }
  });
});

console.log(map);

//THIS IS MY SOLUTION TO THE CONCORDANCE PROBLEM ON DSA INTERVIEW

/*PSUEDO CODE HERE:
first, set new variable to an empty object to store results
second, map through the given array using forEach, taking in two params ===> individual item and it's index
third, convert each item to lowercase using .toLowerCase() method
fourth, create a new variable called lines and use given regex method to split each item into words without punctuation
fifth, use .filter() method to filter out any empty strings from the array
sixth, here is your second loop, nested inside your forEach method ===> now map through the new lines variable using forEach again 
seventh, set a condition to see if line already exists in empty object
eigth, second condition inside of first, if it exists as a key but doesn't include the index, then push the index param to that key 
ninth, else condition ===> assign as a new key/value pair to the empty object
tenth, return the object variable ===> right before last curly brace!
*/

// function concordance(data) {
//   const map = {};

//   data.forEach((item, index) => {
//     item = item.toLowerCase();
//     //     console.log(item);
//     let lines = item.split(/[\s.,';]/);
//     //     console.log(lines);
//     lines = lines.filter((e) => e);

//     lines.forEach((line) => {
//       if (map[line]) {
//         if (!map[line].includes(index)) {
//           map[line].push(index);
//         }
//       } else {
//         map[line] = [index];
//       }
//     });
//   });
//   return map;
// }

// module.exports = concordance;

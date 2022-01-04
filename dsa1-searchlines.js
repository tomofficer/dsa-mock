/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/

/*STEPS FOR SEARCH LINES FUNCTION
1. console.log each param out to make sure you're getting data
2. convert words linked list to an array using the given asArray() function
3. console.log words again to check
4. create results variable and set to an empty array
5. create exists variable and check if the keys in concordance match words array
6. set a condition if nothing exists or if length is 0; return empty array
7. iterate through words array, for each word push ...concordance[word] to results array
8. get rid of duplicates by creating a new set and passing in results
9. convert set back to an array
10. return a map through this new array and for each line return data[line]
*/

//LONGER
function searchLines(words, concordance, data) {
  const results = [];
  words = words.asArray();

  let exists = Object.keys(concordance).some((word) => words.includes(word));

  if (!exists || !words.length) {
    return [];
  }

  words.forEach((word) => {
    results.push(...concordance[word]);
  });

  const noDuplicates = new Set(results);
  const noDuplicatesArray = Array.from(noDuplicates);

  return noDuplicatesArray.map((line) => {
    return data[line];
  });
}

//SHORTER
// function searchLines(words, concorance, data) {
//   const results = [];
//   words = words.asArray();

//   let exists = Object.keys(concordance).some(word => words.includes(word));

//   if (!exists || !words.length) {
//     return [];
//   }

//   words.forEach(word => {
//     results.push(...concordance[word])
//   })

//   return Array.from(new Set(results)).map(line => {
//     return data[line]
//   })
// }

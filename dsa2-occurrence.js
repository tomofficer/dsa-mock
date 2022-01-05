/*You will be given two linked lists, not shown here, first convert them to arrays!

STEPS:
1. convert both linked lists to arrays
2. combine new arrays into one array
3. declare new variable 'obj' as empty object to store results
4. loop through the new array using forEach and pass in city and rainfall as params     destructured
5. set condition 1, if city exists in obj as a key, increment rainfall
5. set condition 2, if city doesn't exist in obj as a key, set value to equal rainfall
6. declare result variable to store output in, use object.entries() and pass in obj as a param
7. then map through that array passing in [city, rainfall] as params and returning { city, rainfall } destructured

*/

const array1 = [
  { city: 'boston', rainfall: 12 },
  { city: 'new york', rainfall: 9 },
  { city: 'miami', rainfall: 20 },
  { city: 'pittsburgh', rainfall: 25 },
  { city: 'miami', rainfall: 60 },
  { city: 'seattle', rainfall: 12 },
];

const array2 = [
  { city: 'oakland', rainfall: 5 },
  { city: 'denver', rainfall: 8 },
  { city: 'miami', rainfall: 10 },
  { city: 'orlando', rainfall: 7 },
  { city: 'seattle', rainfall: 30 },
  { city: 'portland', rainfall: 10 },
];

// const array1 = linkedList1.asArray();
// const array2 = linkedList2.asArray();

const array = [...array1, ...array2];

const obj = {};

array.forEach(({ city, rainfall }) => {
  if (obj[city]) {
    obj[city] += rainfall;
  } else {
    obj[city] = rainfall;
  }
});

let results = Object.entries(obj).map(([city, rainfall]) => {
  return { city, rainfall };
});

console.log(results);

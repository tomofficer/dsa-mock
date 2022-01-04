/*You will be given two linked lists, not shown here, first convert them to arrays!*/

// const array1 = linkedList1.asArray();
// const array2 = linkedlist2.asArray();

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

const array = [...array1, ...array2];

let obj = {};

array.forEach(({ city, rainfall }) => {
  if (obj[city]) {
    obj[city] += rainfall;
  } else {
    obj[city] = rainfall;
  }
});

let result = Object.entries(obj).map(([city, rainfall]) => {
  return { city, rainfall };
});

console.log(result);

/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/

function concordance(data) {
  //   console.log(data);

  const map = {};

  data.forEach((item, index) => {
    //     console.log(item);
    item = item.toLowerCase();
    //     console.log(item);
    let words = item.split(/[\s.,';]/);
    //     console.log(words);
    words = words.filter((e) => e);
    //     console.log(words);

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
  //   console.log(map);
  return map;
}

module.exports = concordance;

//MY COMFORTABLE SOLUTION
function concordance(data) {
  //   console.log(data);
  const results = {};

  data.forEach((sentence, index) => {
    sentence = sentence.toLowerCase();
    //     console.log(sentence);
    let words = sentence.split(/[\s.,';]/);
    //     console.log(words);
    words = words.filter((e) => e);
    //     console.log(words);

    words.forEach((word) => {
      if (results[word]) {
        if (!results[word].includes(index)) {
          results[word].push(index);
        }
      } else {
        results[word] = [index];
      }
    });
  });
  //   console.log(results);
  return results;
}

module.exports = concordance;

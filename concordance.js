let lines = ['This is a test yes IT IS, a very splendid test indeed.', 'if you would like to take this test, please reach out to me.', 'Incredible, the man said, when can I take this HERE TEST say YOU me?', 'Oh sir, please come to thee and take this here test indeed!', 'This is the final test, the final countdown, so please sir, take the damn test already.'];

const map = {}

lines.forEach((line, index) => {
  line = line.toLowerCase();
  let words = line.replace(/[.,]/g, '').split(' ');

  words.forEach(word => {
    if (map[word]) {
      map[word].push(index);
    } else {
      map[word] = [index];
    }
  })
});

console.log(map);
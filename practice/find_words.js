// recursive function that finds all character combinations of input word
const findWords = (word, string='') => {
  if (string.length >= word.length) {
    for (let i = 0; i < word.length; i++) {
      if (string.match(new RegExp(word.text[i], 'g'))?.length > word.count[word.text[i]]) {
        return;
      }
    }
    wordsArray.push(string);
    return;
  }

  for (let i = 0; i < word.length; i++) {
    const current = word.text[i];
    findWords(word, string + current);
  }
}

// Word class containing various properties of a given word
class Word {
  constructor(text, initialize=true) {
    this.text = text;
    this.length = text.length;
    this.count = {};
    this.anagrams = [];
    initialize && this.init();
  }

  init = () => {
    this.getCount();
    this.getAnagrams();
  }

  getCount = () => {
    Array.from(this.text).forEach(i => {
      this.count[i] ? this.count[i] += 1 : this.count[i] = 1;
    });
  }

  getAnagrams = (string='') => {
    if (string.length >= this.length) {
      for (let i = 0; i < this.length; i++) {
        if (string.match(new RegExp(this.text[i], 'g'))?.length > this.count[this.text[i]]) {
          return;
        }
      }
      this.anagrams.push(string);
      return;
    }
  
    for (let i = 0; i < this.length; i++) {
      const current = this.text[i];
      this.getAnagrams(string + current);
    }
  }
}

const str = 'data';

const word = new Word(str, true);
console.log(word);

// let wordsArray = [];
// findWords(word);
// console.log(wordsArray, wordsArray.length);
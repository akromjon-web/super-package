

const findWordCount = (str, word) => {
 const arrStr = str.split(" ");
 let count = 0;
 arrStr.forEach(strWord => {
  if(strWord.toLowerCase() == word.toLowerCase()) {
   count = count + 1
  }
 })
 return `Siz kiritgan matnda ${word} so'zi ${count} ta ishlatilgan`
}

module.exports = findWordCount
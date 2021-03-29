function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  const stopWords = ['1xbet', 'xxx'];

  return stopWords.some(function (el) {
    return lowerStr.includes(el);
  });
}

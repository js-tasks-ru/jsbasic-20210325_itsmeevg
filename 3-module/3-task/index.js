function camelize(str) {
  let temp = str.split('-');
  let capital = temp.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());

  return capital.join('');
}

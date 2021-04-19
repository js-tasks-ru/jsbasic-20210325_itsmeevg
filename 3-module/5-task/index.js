function getMinMax(str) {
  let newStr1 = str.split(',');
  let newStr2 = str.split(' ');
  let arr1 = newStr1.map(el => !isNaN(Number(el)) && el !== '' ? Number(el) : null).filter(el => el !== null);
  let arr2 = newStr2.map(el => !isNaN(Number(el)) && el !== '' ? Number(el) : null).filter(el => el !== null);

  let arr = arr1.concat(arr2);

  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}

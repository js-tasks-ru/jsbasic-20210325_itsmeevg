function sumSalary(salaries) {
  let result = 0;

  for (const [key, value] of Object.entries(salaries)) {
    const curType = typeof value;

    if (curType === 'number' && value !== Infinity && !isNaN(value) && value !== -Infinity) {
      result += value;
    }
  }

  return result;
}

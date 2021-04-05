let calculator = {
  valOne: 0,

  valTwo: 0,

  read(valOne, valTwo) {
    this.valOne = valOne;
    this.valTwo = valTwo;
  },

  sum() {
    return this.valOne + this.valTwo;
  },

  mul() {
    return this.valOne * this.valTwo;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

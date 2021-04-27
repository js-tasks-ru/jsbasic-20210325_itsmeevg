/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.headings = ["Имя", "Возраст", "Зарплата", "Город", ""];

    this.elem = this.result();
  }

  createTable() {
    let table = document.createElement("table");
    table.id = "table";
    let thead = document.createElement("thead");

    table.append(thead);

    return table;
  }

  createTableHeadings() {
    let tr = document.createElement("tr");

    for (let i in this.headings) {
      let th = document.createElement("th");
      th.textContent = this.headings[i];
      tr.append(th);
    }

    return tr;
  }

  rowsHandler() {
    let tbody = document.createElement("tbody");

    for (let i in this.rows) {
      let tr = document.createElement("tr");

      for (const [key, value] of Object.entries(this.rows[i])) {
        let td = document.createElement("td");

        td.textContent = value;
        tr.append(td);
      }

      let td = document.createElement("td");
      let button = document.createElement("button");
      button.textContent = "X";
      td.append(button);
      tr.append(td);

      tbody.append(tr);

      button.addEventListener("click", this.removeButtonHandler);
    }

    return tbody;
  }

  result() {
    let table = this.createTable();
    let headings = this.createTableHeadings();
    let rows = this.rowsHandler();

    table.querySelector("thead").append(headings);
    table.append(rows);
    table.append(rows);

    return table;
  }

  removeButtonHandler(evt) {
    evt.currentTarget.parentNode.parentNode.remove();
  }
}

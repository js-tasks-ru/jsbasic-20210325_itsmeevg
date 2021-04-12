function highlight(table) {
  for (const tr of table.rows) {
    Array.from(tr.cells).forEach((td, index) => {
      let trClassList = tr.classList;

      if (index === 1) {
        if (parseInt(td.textContent, 10) < 18) {
          tr.style.textDecoration = 'line-through';
        }
      } else if (index === 2) {
        if (td.textContent === 'm') {
          trClassList.toggle('male', true);
        } else if (td.textContent === 'f') {
          trClassList.toggle('female', true);
        }
      } else if (index === 3) {
        if (td.dataset.available === 'true') {
          trClassList.toggle('available', true);
        } else if (td.dataset.available === 'false') {
          trClassList.toggle('unavailable', true);
        } else if (!td.hasAttribute('data-available')) {
          tr.hidden = true;
        }
      }
    });
  }
}


function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  friends.forEach(el => {
    let li = document.createElement('li');
    li.innerText = el.firstName + ' ' + el.lastName;
    ul.appendChild(li);
  });

  return ul;
}

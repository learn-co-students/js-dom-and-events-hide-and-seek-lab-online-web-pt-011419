function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  let lis = document.getElementById('app').querySelectorAll('.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    let rank = parseInt(lis[i].innerHTML, 10)
      lis[i].innerHTML = rank + n;
  }
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}

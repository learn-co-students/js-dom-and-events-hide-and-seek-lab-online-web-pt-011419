function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + parseInt(n);
  }
}

function deepestChild() {
  let parent = document.getElementById('grand-node');
  let child = parent.children[0];
  
  while (child) {
    parent = child;
    child = parent.children[0];
  }
  
  return parent; 
}
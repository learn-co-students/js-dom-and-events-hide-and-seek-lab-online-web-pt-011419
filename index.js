function getFirstSelector(selector) {
    return document.querySelector(selector);
  }

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    const lis = document.querySelectorAll('.ranked-list');
    for (let n = 0; n < lis.length; n++) {
        lis[n].innerHTML = (n + 1).toString();
    }
}

function deepestChild() {
    return document.querySelector('#grand-node div div div div');
}
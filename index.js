function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget(){
    return document.querySelector(' .target')
}

function deepestChild() {
    let lis = document.getElementById("grand-node").querySelectorAll("div");
    let test;
    for(let i=0; i < lis.length-1; i++) {
      test=lis[i].querySelector("div");
    }
    return test;
  }

  function increaseRankBy(n) {
    const list = document.querySelectorAll('ul.ranked-list li')
    for (var i = 0; i < list.length; i++) {
      list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
  }
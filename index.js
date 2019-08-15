function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let children = document.querySelectorAll('#grand-node div')
  return children[children.length - 1]
}

function increaseRankBy(n){
  let list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

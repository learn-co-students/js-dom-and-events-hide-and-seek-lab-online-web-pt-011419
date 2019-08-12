function getFirstSelector(selector) {
    return document.querySelector(selector)
}
// returns the first element that matches the selector

function nestedTarget() {
    return document.querySelector('#nested .target')
}
// pulls a .target out of #nested

function deepestChild() {
    const node = document.querySelectorAll('#grand-node div')
    return node[node.length - 1]
}
//  returns the most deeply nested child in #grand-node

function increaseRankBy(n) {
    const node = document.querySelectorAll('.ranked-list')
    for (let n = 0; n < node.length; n++){
        node[n].innerHTML = (n + 1).toString();
        // parseInt(node[n].innerHTML) + 1
    }
}
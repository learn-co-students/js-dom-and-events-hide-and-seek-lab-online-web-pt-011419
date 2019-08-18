function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget(){
    return document.querySelector(' .target')
}

function deepestChild() {
    const lis = document.querySelector('#grand-node');
    let ch = ''
    for (let i = 0; i < lis.length; i++) {
        ch = lis[i].innerHTML = (i + 1).toString();
        return ch
    }
}
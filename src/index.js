// import Example from './scripts/example';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root')
    // new Example(root) 
    let newEle = document.createElement('h1')
    newEle.innerText = 'hello'
    root.append(newEle)
})



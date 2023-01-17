class Example {
    constructor(ele) {
        this.ele = ele;
        // let newEle = document.createElement('h1')
        // newEle.innerText = 'hello4'
        // ele.append(newEle)
        this.ele.innerHTML = "<h1>Does this work?</h1>"
        this.handleClick = this.handleClick.bind(this)
        this.ele.addEventListener('click', this.handleClick)
    }

    handleClick(ev) {
        // ev.preventDefault();
        this.ele.children[0].innerText = 'Ouch!'
    }
}

export default Example;
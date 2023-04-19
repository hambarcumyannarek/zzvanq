const btns = document.querySelector('.btns');
class Buttons {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    static delet(){
        alert('a')
    }
}

let arr = [
    new Buttons('Btn1', 1),
    new Buttons('Btn2', 2),
    new Buttons('Btn3', 3),
    new Buttons('Btn4', 4),
    new Buttons('Btn5', 5),
    new Buttons('Btn6', 6),
]

let butt;
function drow(arr) {
    console.log(arr)
    arr.forEach(btn => {
        btns.innerHTML += `<button id="${btn.id}">${btn.name}</button>`
    })    
    butt = document.querySelectorAll('.btns button');
    console.log(butt);
}

drow(arr);
console.log(butt)

butt.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(Number(btn.getAttribute('id')));
        arr = arr.filter(box => box.id !== Number(btn.getAttribute('id')));
        btns.innerHTML = '';
        drow(arr);
    })
})  
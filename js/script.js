const btns = document.querySelector('.btns');
class Buttons {
    constructor(name, id) {
        this.name = name;
        this.id = id;
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
    console.log(arr);
    arr.forEach(btn => {
        btns.innerHTML += `<button id="${btn.id}">${btn.name}</button>`
    })    
    butt = document.querySelectorAll('.btns button');
    butt.forEach(btn => {
        btn.addEventListener('click', () => {
            arr = arr.filter(obj => obj.id != Number(btn.getAttribute('id')));
            btns.innerHTML = '';
            drow(arr);
        })
    })  
}

drow(arr);




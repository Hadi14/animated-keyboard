const title = document.querySelector('.title');
const li = document.querySelectorAll('li');


const keyArr = ['Escape', 'CapsLock', 'Shift'];

window.addEventListener('keyup', (event) => {

    let x = document.getElementById(event.key.toUpperCase());
    console.log(event)
    if (keyArr.includes(event.key)) {
        if (event.key == 'Shift' && event.location == 1) {
            document.getElementById('left-shift').classList.add('hit');
            removehit(document.getElementById('left-shift'));
        }
        else if ((event.key == 'Shift' && event.location == 2)) {
            document.getElementById('right-shift').classList.add('hit');
            removehit(document.getElementById('right-shift'));
        }
        else if (event.key == 'Escape' || event.key == 'CapsLock') {
            document.getElementById(event.key).classList.add('hit');
            removehit(document.getElementById(event.key));
        }
    }
    else if (event.key == "Backspace") {
        title.removeChild(title.lastChild);
    } else if (event.key == ' ') {
        title.append(event.key);
    }
    else {
        title.append(event.key);
        x.classList.add('hit');
        removehit(x);
    }
})



function removehit(x) {
    x.addEventListener('animationend', () => {
        x.classList.remove('hit')
    })
}
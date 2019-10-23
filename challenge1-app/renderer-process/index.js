let startBtn = document.getElementById('start-btn');
startBtn.onclick = start;

function start(){
    let intro = document.getElementById('intro');
    let solution = document.getElementById('solution');
    intro.style.display = 'none';
    solution.style.display = 'flex';

    let input = document.getElementById('input');
    input.onkeyup = manageInput;

    let submitBtn = document.getElementById('submit-btn');
    submitBtn.onclick = submit;
}

let list = [];
let flash = false;
function manageInput(e){
    let display = document.getElementById('input-display');
    let submitBtn = document.getElementById('submit-btn');
    if(/[^-,\s\d]/.test(e.target.value) && e.target.value.length){
        if(!flash){
            flash = setInterval(flashText, 1000);
            submitBtn.style.display = 'none';
        }
    } else {
        endFlash();
        list = e.target.value.split(/\s|,/).filter( value => value !== '');
        display.innerHTML = '[' + list + ']';
        if(e.target.value.length){
            submitBtn.style.display = 'block';
        } else {
            submitBtn.style.display = 'none';
        }
    }
    console.log(e.target.value);
}

function flashText(){
    let instructions =  document.getElementById('instructions');
    instructions.style.color = instructions.style.color == 'red' ? 'black' : 'red';
}
function endFlash(){
    let instructions =  document.getElementById('instructions');
    instructions.style.color = 'black';
    clearInterval(flash);
    flash = false;
}

function submit(e){
    
}
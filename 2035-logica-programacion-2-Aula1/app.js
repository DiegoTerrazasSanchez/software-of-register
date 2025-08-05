
let numberSecret = 0;
let tryNumbers = 0;
let listNumbers = [];
let numberHight = 10;

const numbertries = 3;
const changeText= (element, txt)=>{
    const idDocument = document.querySelector(element);
    idDocument.innerHTML = txt;
    return ;
}
// `You have this numbers trying ${numbertries}`




function verifyTries(){
    let valueUser = parseInt(document.getElementById('valueUser').value);
    if(valueUser === numberSecret){
        changeText('p',`You get the number in: ${tryNumbers} ${(tryNumbers === 1) ? 'time' : 'times'}`);
        document.getElementById('restart').removeAttribute('disabled');
    }else{
        if(valueUser > numberSecret){
            changeText('p','The number secret is lower');
        }else{
            changeText('p','The number secret is higher');
        }
        tryNumbers ++;
        cleanBox();
    }
    return;

    // changeText('input', 'Try again for play ')
}


function cleanBox(){
    document.getElementById('valueUser').value = '';
}


function generateNumberSecret(){
    let numberGenerate = Math.floor(Math.random()*numberHight)+1;


    if(listNumbers.length == numberHight){
        changeText('p','Already rafled all numbers possible');
    }else{
        if(listNumbers.includes(numberGenerate)){
            return generateNumberSecret()
        }else{
            listNumbers.push(numberGenerate);
            return numberGenerate;
        }
    }
}

function contidionInitial() {
    changeText('h1','Game of number Secret');
    changeText('p',`Enter a number from 1 to${numberHight}`);
    numberS = generateNumberSecret();
    tryNumbers = 1;
}


function restartGame() {
    cleanBox();
    contidionInitial();
    document.querySelector('#restart').setAttribute('disabled','true');
}

contidionInitial();

const changeTitle = changeText('h1', 'Game for guess')
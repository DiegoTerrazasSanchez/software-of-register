// const text = document.querySelector('h1')
// text.innerHTML = 'Hora del Desafío';

// let numberSecret = randomW();
// // console.log(numberSecret, 'This number secret');

// alert(numberSecret)

// function changeText(element, text){
//     let newText = document.querySelector(element)
//     newText.innerHTML = text;
// }


// const buttonF= () =>{
//     alert('El botón fue clicado')
// };

// const FormData = () =>{
//     const forms = prompt('Inser your data');
//     alert( forms);
// };




// const sumNumbers = ()=>{
//     const c = parseInt(prompt('Inser the first number'))
//     const d = parseInt(prompt('Insert the second number'))
//     const sum = c +d;
//     alert(sum)
//     // return sum
// }
// // sumNumbers(a, b)


// function randomW (){
//     return Math.floor(Math.random()*10)+1;
// }

// changeText('h1','This new text for show');
// changeText('p','Chage for p');

// Factorial


// let facNumer = factorialNumber()

const num = (element) =>{
    return element.map((x,i)=> x*i )
}

function factorialNumber(){
    let number = parseInt(prompt('Insert number: '))


    const arrayMap = [...new Array(number)].map((value,index)=>index +1)

    const result= num(arrayMap);
    alert(`Input: ${number}\nOriginal: ${arrayMap}\nMapped: ${result}`);

}

const listG = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python']
console.log('listG',listG);
const newList = listG.push('Java', 'Ruby' , 'GoLang');
const copyArray = [...listG, newList];
console.log('New list',copyArray);

copyArray.forEach((value, index) => {
    console.log('This value: ',value)
    
});

// for (let index = 0; index < copyArray.length; index++) {
//     console.log('This fori: ',copyArray[index]);

// }


const listNumber = [1, 2, 3, 4, 5, 6, 7, 8];
let storagesum = 0;

const resultN = listNumber.map((x, index, arrayO) => {
    storagesum += x;
    return storagesum;
});
const promedio = storagesum / listNumber.length;


console.log('Result:', promedio);

const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8];


listNumbers.forEach(num => {
        console.log(num)
        
});






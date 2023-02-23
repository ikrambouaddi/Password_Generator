console.log('hello word')

const spanLength = document.querySelector('.pass-length input'),
options =document.querySelectorAll('.option input'),
passourdInput=document.querySelector('.input-box input'),
passEndicator=document.querySelector('.pass-indicator'),
copyIcon=document.querySelector('.input-box span'),


generatorBtn = document.querySelector('.generatare-btn');
console.log(options)

const charcters = {
    lowercase :"abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"1234567890",
    Sympols:"!@#$%^&*()_-"
    
}

const generatrPassord =()=>{
    let staticpassord ='',
    randomLength ="",
    falseValue=false,
    passLenght = spanLength.value;
}
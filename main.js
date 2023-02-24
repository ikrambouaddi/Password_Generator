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

    options.forEach(option => {//looping touch each option's check
        console.log('11',option.checked)
        if(option.checked){
            console.log("testtttttttttttttttttttt",option.id)  
            if(option.id !== 'exc-duplicate' && option.id !== 'spaces'){
                console.log("ikram3ndhasah")
                staticpassord += charcters[option.id]
            }else if(option.id === 'spaces'){
                staticpassord += ` ${staticpassord}  ` 
            }else{
                falseValue = true;
            }
            
        }
    });

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
        if(option.checked){
            if(option.id !== 'exc-duplicate' && option.id !== 'spaces'){
                staticpassord += charcters[option.id]
            }else if(option.id === 'spaces'){
                staticpassord += ` ${staticpassord}  ` 
            }else{
                falseValue = true;
            }
            
        }
    });

}

const passIndicatorFct =() =>{
    passEndicator.id =spanLength.value <= 8 ? "weak" : spanLength.value <= 16 ?"medium":"strong";
}
const updateSlider = () =>{
    // pass 
    document.querySelector('.pass-length span').innerText=spanLength.value;
    generatrPassord();
    passIndicatorFct();
}
updateSlider()

const copyPass =()=>{
    navigator.clipboard.writeText(passourdInput.value)
    copyIcon.innerText= "check"
}
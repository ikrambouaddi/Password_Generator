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

    // console.log(staticpassord)
for(let i=0; i < passLenght;i++){
        console.log(i)
        console.log("udehuiew", passLenght);
        let randChat = staticpassord[Math.floor(Math.random() * staticpassord.length)];
        
    if(falseValue){
        console.log("test", randChat, randomLength.includes(randChat))
    !randomLength.includes(randChat) || randChat == " " ? randomLength += randChat : i--;

    }else{
        console.log('ikram')
        randomLength +=randChat;
    }
    // randomLength = "testr"

}
// console.log(randomLength) 
passourdInput.value = randomLength;
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
    setTimeout( ()=>{
        copyIcon.innerText= 'copy_all'
    }, 1500);
}
copyIcon.addEventListener('click',copyPass)
spanLength.addEventListener('input', updateSlider)
generatorBtn.addEventListener('click',generatrPassord)

let tab1=document.querySelectorAll("div input")
let tab2=document.querySelectorAll("textarea")


let regexPWD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
let regexEMAIL = /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/


let btn1=document.querySelector(".btnsub")
btn1.addEventListener("click", function(e){
    e.preventDefault() // to avoid the page refresh
    for(x of tab1){
    if (x.value === ""){
       return alert("s'il vous plait remplissez tout les champs")
    }if(x.className === 'email' &&(!x.value.match(regexEMAIL))){
        
            alert('Please enter a valid email')
        
    }else if(x.className === 'password' && !x.value.match(regexPWD)){
           alert('Password must be 8 characters or more, one uppercase, numbers')
    } 
    }})


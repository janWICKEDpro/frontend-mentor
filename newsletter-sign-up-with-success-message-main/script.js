let email = "";

const inputElements = document.getElementsByTagName("input");
const subscribeButton = document.getElementById("subscribe");
const dismissButton = document.getElementById("dismiss");
const mainCard = document.getElementsByClassName("card-main");

inputElements[0].addEventListener("change", ()=>{
    email = inputElements[0].value;
    console.log(email);
});

subscribeButton.addEventListener("click", ()=>{

    if(String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        mainCard[0].classList.toggle('inactive');
        mainCard[0].nextElementSibling.classList.toggle('inactive');
        document.getElementsByTagName("span")[0].innerHTML = email;
    }else{
        console.log(document.getElementsByClassName('error-message')[0].classList);
        console.log( inputElements[0].classList);
        if(document.getElementsByClassName('error-message')[0].classList.contains('inactive') && !inputElements[0].classList.contains('error')){
            document.getElementsByClassName('error-message')[0].classList.remove("inactive");
            inputElements[0].classList.add('error');
        }
       
    }
});


dismissButton.addEventListener("click", ()=>{
   
        mainCard[0].classList.toggle('inactive');
        mainCard[0].nextElementSibling.classList.toggle('inactive');
        inputElements[0].value = "";
        email = "";
        if(!document.getElementsByClassName('error-message')[0].classList.contains('inactive') && inputElements[0].classList.contains('error')){
            document.getElementsByClassName('error-message')[0].classList.add("inactive");
            inputElements[0].classList.remove('error');
        }
      
});


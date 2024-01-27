const questionDivs = document.querySelectorAll('.question');

questionDivs.forEach(questionDiv =>{

    let answer = questionDiv.nextElementSibling;
    let plusIcon = questionDiv.querySelector('.plus');
    let minusIcon = questionDiv.querySelector('.minus');

    questionDiv.addEventListener('click', ()=>{
        
        console.log(answer.classList);
        answer.classList.toggle('inactive');
        plusIcon.classList.toggle('inactive');
        minusIcon.classList.toggle('inactive');
    })

});
//using selectors inside the element



const Questions = document.querySelectorAll('.question');

Questions.forEach( function(Q){
    const Btn = Q.querySelector('.question-btn');

    Btn.addEventListener('click', function(){
        Questions.forEach(function(item){
            
            console.log("item:",item);
            console.log("Q", Q);
            if(item !== Q){
                item.classList.remove('show-text');
            }

        });
          

        Q.classList.toggle('show-text');
    });
});
 
// traversing the dom
/*const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(item){
item.addEventListener('click', function(e){
    const Question = e.currentTarget.parentElement.parentElement;
    Question.classList.toggle('show-text');
});
});*/
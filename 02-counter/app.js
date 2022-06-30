//set initial count
let count = 0; 

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//console.log(btns); shows a NodeList in console

btns.forEach(function(Btn){
    //console.log(Btn);
    Btn.addEventListener('click', function(e){
        //console.log(e.currentTarget);
        //console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else if(styles.contains('increase')){
            count++;
        }
        
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count == 0){
            value.style.color = '#222';
        }

        value.textContent = count;
    });
});
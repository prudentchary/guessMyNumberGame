'use strict';
let correctScore = Math.trunc(Math.random()*20)+1;
let numberInformation = document.querySelector('.message');
const hiddenNumber = document.querySelector('.number')
let presentScore = 20;
let score = document.querySelector('.score')
let highScore= 7





document.querySelector('.check').addEventListener('click', function(){
    
    let guess = Number(document.querySelector('.guess').value)
    // let SemiHighSccore = ;

    
    if (guess == ' '){
        numberInformation.textContent = `No number is guess`
        document.querySelector('.check');
        
        

        
       
        
        
    }


    else if (guess === correctScore){
      
            numberInformation.textContent = `✔  correct 🏆`
            numberInformation.style.color ='white' 
            
            document.body.style.backgroundColor='green'
            document.querySelector('.check').style.backgroundColor='green'
            



            if(presentScore > highScore){
                highScore=presentScore
                document.querySelector('.highscore').textContent= highScore;
                




      

    
    
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    else if (guess > correctScore){
        if(presentScore > 7){
            numberInformation.textContent = `❌${guess} is greater than the secrete number, try a lower number ` ,
            numberInformation.style.color = 'red'
            presentScore--
            score.textContent=presentScore;
            document.querySelector('.check').style.backgroundColor='red'
        }else {
            numberInformation.textContent=`You lost the game`
             }

    } else if (guess < correctScore) {
        if(presentScore > 7){
            numberInformation.textContent = `❌${guess} is lesser than the secret number, try a higher number`; 
            numberInformation.style.color = 'red';
            presentScore--
            score.textContent=presentScore
            document.querySelector('.check').style.backgroundColor='red'
        }else {
            numberInformation.textContent=`🎇 You lost the game`
        }
 
    }

})

document.querySelector('.again').addEventListener('click', function(){
    alert('all the page is reloading')
    
    presentScore = 20
    document.querySelector('.guess').value=''
    correctScore = Math.trunc(Math.random()*20)+1;
    score.textContent=presentScore;
    numberInformation.textContent=`Start guessing...`
    document.body.style.backgroundColor='#222'
    numberInformation.style.color='white';
    hiddenNumber.textContent=`?`
    document.querySelector('.check').style.backgroundColor='white'
    


})
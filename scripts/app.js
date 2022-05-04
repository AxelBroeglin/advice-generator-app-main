//Gets the placeholder for the Advice ID
let adviceId = document.getElementById('advice-id');
//Gets the placeholder for the Advice
let advice = document.getElementById('advice');
//Gets the button for a new advice
let newAdvice = document.getElementById('dice-container');


//First request to receive the advice and its ID when page is loaded
fetch('http://api.adviceslip.com/advice')
.then(function(resp){
    return resp.json();
})    
.then (function(data){
    adviceId.innerText = 'ADVICE ' + data.slip.id;
    advice.innerText = '"' + data.slip.advice + '"';
}) 

//On click on the button, new request to get a new advice
newAdvice.onclick = () => {
    fetch('http://api.adviceslip.com/advice')
    .then(function(resp){
        return resp.json();
    })    
    .then (function(data){
        adviceId.innerText = 'ADVICE ' + data.slip.id;
        advice.innerText = '"' + data.slip.advice + '"';
    })
}

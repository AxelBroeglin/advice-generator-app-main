//Gets the placeholder for the Advice ID
let adviceId = document.getElementById('advice-id');
//Gets the placeholder for the Advice
let advice = document.getElementById('advice');
//Gets the button for a new advice
let newAdvice = document.getElementById('dice-container');


//First request to receive the advice and its ID when page is loaded
function getAdvice(url) {
    return fetch(url)  // returns this promise
    .then(response => response.json())
    .then (function(data){
        adviceId.innerText = 'ADVICE ' + data.slip.id;
        advice.innerText = '"' + data.slip.advice + '"';
    }) 
}

//Use the function by passing it the API url
getAdvice('http://api.adviceslip.com/advice');
//On click on the button, new request to get a new advice
newAdvice.onclick = () => {
    getAdvice('http://api.adviceslip.com/advice');
}
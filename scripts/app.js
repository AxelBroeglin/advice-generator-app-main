fetch('http://api.adviceslip.com/advice')
.then(function(resp){
    return resp.json();
})    
.then (function(data){
    let adviceId = document.getElementById('advice-id');
    let adivce = document.getElementById('advice');
    console.log(adviceId)
    adviceId.innerText = 'ADVICE ' + data.slip.id;
    advice.innerText = '"' + data.slip.advice + '"';
}) 
    


    
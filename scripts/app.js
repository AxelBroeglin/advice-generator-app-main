fetch('http://api.adviceslip.com/advice')
.then(function(resp){
    return resp.json();
})    
.then(data => console.log(data.slip.id, data.slip.advice));


    
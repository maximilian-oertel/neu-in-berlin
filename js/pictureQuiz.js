window.onload = init;

function init(){
    var start = document.getElementById('start');
    start.onclick = startQuiz;
    
    
    var check = document.getElementById('check');
    check.onclick = checkAnswer;
    
}

function startQuiz(){
    
    var imgVisible = document.getElementById('test');
    imgVisible.style.visibility = 'visible';
    
    var counter = $('#counter').text();
    
    $({numberValue: counter}).animate({numberValue: 0}, {
    duration: 15000,
    easing: 'linear',
    step: function() { 
        $('#counter').text(Math.ceil(this.numberValue)); 
    }
});
            
        $('#test').hide().fadeIn(10000);
    }

function checkAnswer(){
    var radio = document.querySelector('input[name = "a"]:checked').value;
    if(radio === "Alexanderplatz"){
    alert("Die korrekte Antwort ist: " + radio);
        window.location.replace("index.html");
    } else {
        alert('Das ist leider falsch.')
    
    }
}
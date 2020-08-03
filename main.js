// function number(x) {
//     pinInputSection.pinInputScreen.value =pinInputSection.pinInputScreen.value +  x;
// }


var pinGenerator = document.getElementById('pin-generator');
pinGenerator.addEventListener('click', function () {
    let randomNumber = Math.round(1000 + Math.random() * 9000 );
    document.getElementById('pin-box').value = randomNumber;
})


function back() {
    var value = document.getElementById("pin-input").value;
    document.getElementById("pin-input").value = value.substr(0, value.length - 1);
}


var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function () {
    var pin = document.getElementById('pin-box').value;
    var pinNumber = parseInt (pin);
    var matchPin = document.getElementById("pin-input").value;
    var   matchPinNumber = parseInt (matchPin);
    if (pinNumber == matchPin ) {

        document.getElementById("pin-matched").style.display = 'block';
        document.getElementById("try-again").style.display = "none";


    } else {

        document.getElementById("try-again").style.display = "block";
        document.getElementById("pin-matched").style.display = 'none';

        var trying =  document.getElementById('try').innerText;
        var tryNumber = parseInt ( trying );
        var tryNumber = tryNumber - 1;
        document.getElementById('try').innerText = tryNumber;

        if ( tryNumber == 0 ) {
            // document.getElementById('submit').disabled = true;
            document.getElementById("submit").style.display = "none";




            var timeleft = 10;
            var downloadTimer = setInterval(function(){
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                // document.getElementById("timeRemaining").innerHTML = "Finished";
                 document.getElementById("submit").style.display = "block";
                 document.getElementById('try').innerText = "3";
                 document.getElementById('anotherTry').innerText = "Again";
                 document.getElementById("timeRemaining").style.display = "none"
    
            } else {
                document.getElementById("timeRemaining").innerHTML = timeleft + " seconds remaining to active Submit button";
                document.getElementById("timeRemaining").style.display = "block"
            }
            timeleft -= 1;
            }, 1000);






        }

    
    }



    
})


















// var timeleft = 10;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("timeRemaining").innerHTML = "Finished";
//   } else {
//     document.getElementById("timeRemaining").innerHTML = timeleft + " seconds remaining to active Submit button";
//   }
//   timeleft -= 1;
// }, 1000);


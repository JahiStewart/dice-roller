function rollSixDice() {
    for(let i=1; i<7; i++){
        document.getElementById("die"+i).value = Math.floor(Math.random()*6) + 1;
    } 
}
function displayDice(){
    for(let i = 1; i < 7; i++) {
        document.body.innerHTML +='Die #'+i+': <input id="die'+i+'" type="text" value="" size="5" readonly><br><br>'
     }
}

var numArray = [];

document.getElementById('numberOne').addEventListener('input', function(e){numArray[0] = e.target.value; console.log(numArray[0]); });
document.getElementById('numberTwo').addEventListener('input', function(f){numArray[1] = f.target.value; });
document.getElementById('numberThree').addEventListener('input', function(t){numArray[2] = t.target.value; });



function myFunction() {
document.getElementById("myReset").reset();
}
document.getElementById('myButton').addEventListener("click", clickHandler)



function clickHandler() {

numArray.sort(function(a,b) {
    return a - b;
})

var sum = 0
for( var i =0; i < 3; i++){
    sum+= parseInt(numArray[i], 10);
}

var avg = sum/3;

document.getElementById('maxOutput').value = numArray[2];
document.getElementById('minOutput').value = numArray[0];
document.getElementById('meanOutput').value = avg;
document.getElementById('medianOutput').value = numArray[1];
document.getElementById('rangeOutput').value = numArray[2] - numArray[0];


}
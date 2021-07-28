function compute()
{
    
    a = document.getElementById('principalamount').value;
    r = document.getElementById('rateinter').value;
    y = document.getElementById('years').value;

    var amount = document.getElementById("principalamount");
    var year = document.getElementById("years");
    

    if(amount.value == ""){
        alert("Please enter an amount");
        amount.focus();
        return false;
    }
    if(amount.value <= 0){
        alert("Please enter a positive amount");
        amount.focus();
        return false;
    }
    if(year.value <= 0){
        alert("Please choose a positive number");
        year.focus();
        return false;
    }


    var integer1 = parseFloat(a, 10);
    var integer2 = parseFloat(r, 10);
    var integer3 = parseFloat(y, 10);
    c = ((integer1*integer2)/100)*integer3;
    h = 2021 + integer3;
    document.getElementById('textInput1').value=a;
    document.getElementById('textInput2').value=r+"%";
    document.getElementById('textInput3').value=c;
    document.getElementById('textInput4').value=h;
}
        
function updateTextInput(val) {
    document.getElementById('textInput').value=val+"%"; 
    
}

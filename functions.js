function printDate(){
    document.write(Date());
}

// printDate();

document.write("<br>"); 
function printValue(price, quantity){
    document.write(price * quantity);


}

// printValue(100,5);

document.write("<br>"); 

function getValue(price,quantity){
    return (price*quantity);
}

var finalValue= getValue(200,8);

// alert(finalValue);

var myName = "bawantha";

function printName(){
    var myName = "ananda";
    document.write("my name is : " + myName);
}
printName();

document.write("<br>"); 
document.write("my full name : " + myName);
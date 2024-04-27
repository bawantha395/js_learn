// click mouseover change

//<a onClick = "doSomthing();"> Click me </a>

//addEventListener("event",function());
//eg:- element.addEventListener("click", doSomething);

var myButton = document.getElementById("clickmenow");
myButton.addEventListener("click", doSomething);

function doSomething(event){
    console.log(event);
}


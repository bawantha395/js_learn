// for(start;condition ;step){
//     //code to be repeated
// }

var days = ["mon", "tues", "wens", "thur", "fri", "sat", "sun"];

document.write(days[0] + "<br>");
document.write(days[1] + "<br>");
document.write(days[2] + "<br>");
document.write("<br>");

for(var i=0;i<7;i++){
    document.write(days[i] + "<br>");
}

document.write("<br>");

var j =0;
while( j <7){
    document.write(days[j] + "<br>");
    j++;
    
}
document.write("<br>");

var k =0;
do{
    document.write(days[k   ] + "<br>");
    k++;
}
while( k<7);


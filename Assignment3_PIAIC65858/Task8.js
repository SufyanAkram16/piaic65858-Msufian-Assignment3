//A
var counting = [];
for(i=1; i<=15;i++){
    counting.push(i);
}
document.write("counting:" + counting + "<br>");

//B
var revCount = [];
for(i=10; i>=1; i--){
    revCount.push(i);
}
document.write("Reverse counting: " + revCount + "<br>");

//C
var even = [];
for(i=0; i<=20; i++){
    if(i%2==0){
        even.push(i);
    }
}
document.write("Even: " + even + "<br>");
//D
var odd = [];
for(i=0; i<=20; i++){
    if(i%2==1){
        odd.push(i);
    }
}
document.write("Odd: " + odd + "<br>");

//E
var series = [];
for(i=1; i<=20; i++){
    if(i%2==0){
        series.push(i + "k");
    }
}
document.write("Series: " + series);
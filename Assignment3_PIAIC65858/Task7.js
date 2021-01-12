var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var result = [];
unionArray = [].concat(a,b);
for(i=0; i<unionArray.length; i++){
    if(result.indexOf(unionArray[i])==-1){
        result.push(unionArray[i]);
}
}
result.sort(function(a,b){return a-b});
document.write(result);
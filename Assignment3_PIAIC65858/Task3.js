var aColors = ["Red", "Blue","Yellow", "Green" , "Black"];
document.write("Initial Array: " + "<br>");
document.write(aColors);
document.write("<br>" + "<br>");

//3a
document.write("Array after adding new color at the begining: <br>");
var beg = prompt("What color You want to add to the begining:");
aColors.splice(0,0,beg);
document.write(aColors + "<br>" + "<br>");


//3b
document.write("Array after adding the new color at the end: <br>");
var end = prompt("Add the color to add at the end:");
aColors.splice(aColors.length,0,end);
document.write(aColors+ "<br>" + "<br>")


//3c
document.write("Array after adding two more colors at the begining:" + "<br>");
aColors.splice(0,0,"Brown","White");
document.write(aColors + "<br>" + "<br>");


//3d
document.write("Array after removing the first element:" + "<br>");
aColors.splice(0,1);
document.write(aColors + "<br>" + "<br>");

//3e
document.write("Array after deleting the last element from the array: <br>");
aColors.splice(aColors.length-1,1);
document.write(aColors + "<br>" + "<br>");

//3f

document.write("Array after adding color at desired index/position:" + "<br>");
var ind = parseInt(prompt("Enter the index/position to add color:"));
var newE = prompt("Enter a color to add at desired position")
aColors.splice(ind,0,newE);
document.write(aColors + "<br>" + "<br>");

//3g
document.write("The array after removing color(s) from desired index : <br>");
var index = parseInt(prompt("At which index you want to delete color(s):"));
var delElements = parseInt(prompt("how many colors you want to remove from " + index + " position:"));
aColors.splice(index,delElements);
document.write(aColors);

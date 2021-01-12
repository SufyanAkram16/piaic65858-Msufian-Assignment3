var names = ["Asad","Mubeen","Usman"];
var scores = [320, 230, 480];
var tMarks = 500;

for(i=0; i<names.length ; i++){
    var percentage =(scores[i]/tMarks)*100;
    document.write("Score of " + names[i] + " is "+ scores[i]+ ". Percentage: " + percentage + "%");
    document.write("<br>");
}
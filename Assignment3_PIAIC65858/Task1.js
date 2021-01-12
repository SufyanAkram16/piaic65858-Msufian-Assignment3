var edu = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
var eLength = edu.length;

document.write("<h1>Qualifications:</h1>")
for (i = 0; i < eLength; i++) {
   
    document.write((i+1) +") " + edu[i]); 
   document.write("<br>");
}

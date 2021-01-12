 var A = ["cake", "apple pie", "cookie", " chips", "patties"];
 var input = prompt("Welcome to ABC Bakery. What do you want to order sir/mam?");
  
 var a=false;
 for(i=0; i<A.length; i++){
     if(input==A[i]){
         alert(A[i] + " is available at index " + i + " in our bakery");
         a=true;
         break;
     }
 }
 if(!a){
    alert("We are sorry. " + input + " is not available in our bakery");
}
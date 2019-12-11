/*


binary script page
Name: Mahmoud Abedaljawad
Decimal integr convertor
12/10/2019


*/
     function calcB(){
       var arr = new Array(32);
       var val = 0;
       var userInput =0;
       var stat = false;
       userInput = document.getElementById("exampleInputEmail1").value;
userVal.innerHTML=userInput;
if(userInput==0){ bVal.innerHTML =userInput}
else{
  while(userInput>0){
   val = userInput % 2;
   userInput = Math.floor(parseInt(userInput)  / 2);
   console.log(userInput)
arr.push(val);

 }
}
 bVal.innerHTML = arr.reverse().join("");}

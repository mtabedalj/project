/*


hexa script page
Name: Mahmoud Abedaljawad
Decimal integr convertor
12/10/2019


*/
     function calcB(){
       var arr = new Array(32);
       var val = 0;
       var userInput =0;
        userInput = document.getElementById("exampleInputEmail1").value;
userVal.innerHTML=userInput;
if(userInput==0){ bVal.innerHTML =userInput}
else{
  while(userInput!=0)  {
   val = userInput % 16;
   if(val < 10)
   {
     arr.push(String.fromCharCode(val + 48));
   }
   else
   {
arr.push(String.fromCharCode(val + 55));
   }
   userInput = Math.floor(parseInt(userInput)  / 16);
   console.log(userInput)


 }

 bVal.innerHTML = arr.reverse().join("")

}


       }

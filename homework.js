'use strict';

function BinaireDecimal(num) {

   //0    1     1     0     0     1    = 25
   //2^5  2^4   2^3   2^2   2^1   2^0
   //32   16     8     4     2     1
   //0   16     8     0     0     1

   let sum = 0;
   let array = num.split("")
   for (let i = 0; i <num.length; i++){
      sum = sum + array[i] * Math.pow(2,array.length - 1 - i )
   }
   return sum

}

console.log(BinaireDecimal("11001"))
function DecimalABinaire(num) {
   //25 /2 = 12.5 = 1
   //12 /2 = 6 = 0
  // 6 /2 = 3 = 0
   //3 /2 = 1.5 = 1
   //1 /2 = 0.5 = 1

   let binaire = []
   while(num>= 1){
      let res = Math.trunc( num % 2)
      num = num /2
      binaire.unshift(res) //1 0 0 1 1
   }
   return binaire.join("")
}

console.log(DecimalABinaire(25))

module.exports = {
   BinaireDecimal,
   DecimalABinaire,
};
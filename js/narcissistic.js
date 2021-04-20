/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 */
function narcissistic(value) {
  var x = y = value;
  let pot = aux1 = soma = 0;
  while(x!=0){
    x /= 10
    x = parseInt(x)
    pot += 1
  } //retorna 4
  for(let i=0; i<=pot; i++){
    aux1 = y%10
    y /= 10
    y = parseInt(y)
    let potencia = aux1**pot // elevar um numero
    soma += potencia
  }
  if(soma == value)
    return true
  return false
  // Code me to return true or false
}
console.log(narcissistic(1982))
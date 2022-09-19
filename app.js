document.getElementById('cardname').addEventListener('keyup',validateCard);
document.getElementById('cardnumber').addEventListener('keyup',validateNum);
document.getElementById('cardmonth').addEventListener('keyup',validateMonth);
document.getElementById('cardyear').addEventListener('keyup',validateYear);
document.getElementById('cardcvc').addEventListener('keyup',validateCvc);
///errro message
const textError = document.getElementById('text-error')
const numError = document.getElementById('number-error')
const monthError = document.getElementById('month-error')
const yearError = document.getElementById('year-error')
const cvcError = document.getElementById('cvc-error')
const btnError = document.getElementById('btn-error')
function validateCard(){
  const name = document.getElementById('cardname').value;
  if(name.length === 0){
    textError.innerHTML = 'Name is required'
    return false
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
     textError.innerHTML = 'write full name'
    return false
  }
    textError.innerHTML = '<i class = "fas fa-check-circle"></i>';
  return true;
}

function validateNum(){
 const num = document.getElementById('cardnumber').value
 if (num.length === 0){
   numError.innerHTML = 'Number is required'
   return false
 }
 if(!num.match(/^5[0-9]{16}?$/)){
   numError.innerHTML = 'Invalid!!'
   return false;
 }
 numError.innerHTML = '<i class = "fas fa-check-circle"></i>';
 return true;

}

function validateMonth(){
 const month = document.getElementById('cardmonth').value 
 if(month.length === 0){
   monthError.innerHTML = 'Input!'
   return false;
 }
 if(!month.match(/^(0[1-9]|1[0-12])$/)){
   monthError.innerHTML = 'Invalid!!'
   return false
 }
   monthError.innerHTML = '<i class = "fas fa-check-circle"></i>';
   return true;

}
function validateYear(){
  const year = document.getElementById('cardyear').value 
  if(year.length === 0){
    yearError.innerHTML = 'Input!'
    return false;
  }
  if(!year.match(/^(20|21)\d{2}$/)){
    yearError.innerHTML = 'Invalid!!'
    return false
  }
    yearError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
}
function validateCvc(){
  const cvc = document.getElementById('cardcvc').value 
  if(cvc.length === 0){
    cvcError.innerHTML = 'Input!'
    return false;
  }
  if(!cvc.match(/^[0-9]{3}$/)){
    cvcError.innerHTML = 'Invalid!!'
    return false
  }
    cvcError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
}

function validateForm(e){
 if(!validateCard() || !validateNum() || !validateMonth() || !validateYear() || !validateCvc()){
   btnError.style.display = 'block' 
   btnError.innerHTML = 'fix error to submit'
   setTimeout(function(){btnError.style.display='none'},3000)
   return false;
 }
 else{
   const htag = document.getElementsByClassName('h-front').innerText = `hello`

  
   }
 e.preventDefault()
 }


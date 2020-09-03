window.addEventListener('DOMContentLoaded',() => {
  let total =[] 
  let sum =0;
  const sumVal = document.getElementsByClassName('sum_value')
  for(let i=0; i<sumVal.length; i++) {
    
    if(sumVal[i] != null){
      const number = (Number(sumVal[i].textContent))
      total[i] = number
    } else {
      return
    }; 
     sum = total[i] + sum
     
     const totalPrice = document.getElementById('total_price')
     totalPrice.textContent = sum
  }

});

window.addEventListener('DOMContentLoaded',() => {
  const amount = document.getElementById('amount');
  const amountVal = Number(amount.value);
  console.log(amountVal)
  const sumVal = document.getElementsByClassName('sum_value')
  let total =[] 
  let sum =0;
  for(let i=0; i<sumVal.length; i++) {
 
    const number = (Number(sumVal[i].textContent))
  total[i] = number 
  
   sum = total[i] + sum
  }
  const month  = document.getElementById('month').value;
  const month_text = document.getElementById('month_text');
  month_text.textContent = month
  
  const balancePrice = document.getElementById('balance_price')
  const sumPrice = document.getElementById('sum_price')
  balancePrice.textContent = `${(amountVal - sum).toLocaleString()}円`
  sumPrice.textContent = `${(sum).toLocaleString()}円`
  console.log(balancePrice)
  console.log(sum)


});

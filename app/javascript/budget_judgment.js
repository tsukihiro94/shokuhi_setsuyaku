window.addEventListener('DOMContentLoaded',() => {

  const targetAmount = document.getElementById('amount');
  const targetAmountVal = Number(targetAmount.value);
  const year = document.getElementById('year');
  const month = document.getElementById('month');
  const thisYear = Number(year.value);
  const thisMonth = Number(month.value);

  let lastDate = new Date(thisYear, thisMonth, 0);
    lastDate =lastDate.getDate()
    const budget =  Math.floor(targetAmountVal / lastDate)
    const dayBudget = document.getElementById('budget')
    dayBudget.textContent = budget.toLocaleString()

  const sumVal = document.getElementsByClassName('sum_value');
  const expense = document.getElementsByClassName('name_price')
  let expenses =[] 
  for(let i = 0; i < sumVal.length; i++){
    let price = Number(sumVal[i].textContent)
    expenses[i] = expense[i]
    if((budget - price) < 0){
      expenses[i].setAttribute('style',"background-color: lightpink;");
    }
  }
});
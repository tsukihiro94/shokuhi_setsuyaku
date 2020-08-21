window.addEventListener('DOMContentLoaded',() => {


//日にちと予算を計算し、表示する
const day  = document.getElementById('day');
const ByDay = document.getElementById('ByDay');
const targetAmount = document.getElementById('target_amount');
const targetAmountVal = Number(targetAmount.value);
const year = document.getElementById('year');
const month = document.getElementById('month');
const thisYear = Number(year.value);
const thisMonth = Number(month.value);

const d = new Date();
let lastDate = new Date(thisYear, thisMonth, 0);
lastDate =lastDate.getDate()


const budget =  Math.floor(targetAmountVal / lastDate)
console.log(budget)
ByDay.textContent= `${day.textContent}の予算は、${budget}円です。`
//日にちと予算を計算し、表示する

//予算達成したかジャッジメント
     const totalPrice = document.getElementById('total_price');
     const totalPriceVal = Number(totalPrice.textContent);
     const balance = (budget - totalPriceVal);

     const judgment1 = document.getElementById('judgment_1')
     const judgment2 = document.getElementById('judgment_2')
  
      if ( balance > 0 || balance == 0){
        const remainder =
        judgment1.textContent= "予算達成おめでとう"
        judgment2.textContent=`${balance}円も余りが出ました！！貯金しよう🐽`
       return
      }else{
          const over = Math.abs(balance);
          judgment1.textContent="残念予算達成ならず"
          judgment2.textContent=`予算から${over}円オーバーです`
            
      return
      };
//予算達成したかジャッジメント
});
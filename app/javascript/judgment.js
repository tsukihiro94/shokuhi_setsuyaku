window.addEventListener('DOMContentLoaded',() => {

  const day  = document.getElementById('day');
  const ByDay = document.getElementById('ByDay');
  const targetAmount = document.getElementById('target_amount');
  const targetAmountVal = Number(targetAmount.value);
  const year = document.getElementById('year');
  const month = document.getElementById('month');
  const thisYear = Number(year.value);
  const thisMonth = Number(month.value);
  
  let lastDate = new Date(thisYear, thisMonth, 0);
  lastDate =lastDate.getDate()
   console.log(lastDate)
  const budget =  Math.floor(targetAmountVal / lastDate)
  console.log(budget)
  ByDay.textContent= `${day.textContent}の予算は、${budget.toLocaleString()}円です。`
  //日にちと予算を計算し、表示する
  
  // 予算達成したかジャッジメント

     const totalPrice = document.getElementById('total_price');
     const totalPriceVal = Number(totalPrice.textContent);
     const balance = (budget - totalPriceVal);
     const judgment1 = document.getElementById('judgment_1');
     const judgment2 = document.getElementById('judgment_2');
     const judgment3 = document.getElementById('judgment_3');
     const judgment4 = document.getElementById('judgment_4');
     const advice1 = document.getElementById('advice1');
     const advice2 = document.getElementById('advice2');
     const character1 = document.getElementById('character_image1');
     const character2 = document.getElementById('character_image2');
     const character3 = document.getElementById('character_image3');


    let total =[] 
    let items =[]
    for(let i=0; i<price.length; i++) {
      
      const priceVal = document.getElementsByClassName('price');
      const itemVal = document.getElementsByClassName('name');

      if(price[i] != null){
        const priceNumber = (Number(priceVal[i].textContent));
        const itemNumber = (itemVal[i].textContent);
        total[i] = priceNumber
        items[i] = itemNumber
        console.log(total);
        console.log(items);
      }
    }; 
      
      const counts = total;  
       let goal = Math.abs(balance);
        if (balance > 0 || balance == 0)  {
          judgment1.textContent= "予算達成おめでとう"
          judgment3.textContent=`${balance}円`
          judgment4.textContent=`も余りが出ました！！`
          advice2.textContent= "貯金しよう🐽"
          character1.setAttribute("style", "display: block;");
          return
        }else if ( 0 > balance && balance > -500 ) {
          const over = Math.abs(balance);
          goal = (goal * 1.1) ;
          let output = counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
          judgment1.textContent="惜しい...予算達成ならず"
          judgment2.textContent=`予算から`
          judgment3.textContent= `${over}円`
          judgment4.textContent=`オーバーです`
          if((output - goal) > 0){
          const indexNumber = total.indexOf(output)
          advice1.textContent= `${output}円の${items[indexNumber]}`
          advice2.textContent="を我慢したら予算達成したとん！"
          character2.setAttribute("style", "display: block;");
          return
          }else{
            goal = (goal * 1.2)
            output = counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
            if((output - goal) > 0){
              const indexNumber = total.indexOf(output)
              advice1.textContent= `${output}円の${items[indexNumber]}`
              advice2.textContent="を我慢したら予算達成したとん！"
              character2.setAttribute("style", "display: block;");
              return
            }else{
              goal = (goal * 1.3)
              output = counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
              if((output - goal) > 0){
                const indexNumber = total.indexOf(output)
                advice1.textContent= `${output}円の${items[indexNumber]}`
                advice2.textContent="を我慢したら予算達成したとん！"
                character2.setAttribute("style", "display: block;");
                return
              }else{  
                goal = (goal * 1.5)
              output = counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
              if((output - goal) > 0){
                const indexNumber = total.indexOf(output)
                advice1.textContent= `${output}円の${items[indexNumber]}`
                advice2.textContent="を我慢したら予算達成したとん！"
                character2.setAttribute("style", "display: block;");
                return
              }else{  
                goal = (goal * 1.5)
              output = counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
              if((output - goal) > 0){
                const indexNumber = total.indexOf(output)
                advice1.textContent= `${output}円の${items[indexNumber]}`
                advice2.textContent="を我慢したら予算達成したとん！"
                character2.setAttribute("style", "display: block;");
                return
              }else{      
                goal = (goal * 1.5)
              output = counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
              if((output - goal) > 0){
                const indexNumber = total.indexOf(output)
                advice1.textContent= `${output}円の${items[indexNumber]}`
                advice2.textContent="を我慢したら予算達成したとん！"
                character2.setAttribute("style", "display: block;");
                return
              }else{       
                goal = (goal * 108)
                output = counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
                const indexNumber = total.indexOf(output)
                advice1.textContent= `${output}円の${items[indexNumber]}`
                advice2.textContent="を我慢したら予算達成したとん！"
                character2.setAttribute("style", "display: block;");
              }
              }              
              }              
              }
            }
          }
        }else{
          const over = Math.abs(balance);
          judgment1.textContent="残念...予算達成ならず"
          judgment2.textContent=`予算から`
          judgment3.textContent= `${over}円`
          judgment4.textContent=`オーバーです`
          character3.setAttribute("style", "display: block;");
          return
        };
// //予算達成したかジャッジメント
});
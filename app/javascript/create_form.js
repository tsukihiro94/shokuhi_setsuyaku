window.addEventListener('DOMContentLoaded',function(){
  const path =  location.pathname
  const myPagePath = document.getElementById('user_id').value
  if (path === myPagePath) {
    const e = 1
    const btn = document.getElementById('add')
    btn.addEventListener('click', function(){

    let selectNumber = document.getElementsByClassName('select-box')
    let indexNumber = selectNumber.length
    console.log(indexNumber)

    const form = document.getElementById('form-group')
    const priceDefault = document.getElementsByClassName('price-default');
    const priceDefaultLength = priceDefault.length
  
    if (priceDefaultLength > 9 ){
    return;
    }
    const option = [
      {val: "1", txt: "--" },
      {val: "2", txt: "朝食" },
      {val: "3", txt: "昼食" },
      {val: "4", txt: "夕食" },
      {val: "5", txt: "食材" },
      {val: "6", txt: "飲み物" },
      {val: "7", txt: "おやつ" },
      {val: "8", txt: "交際費" },
      {val: "9", txt: "その他" }
    ];

    const select = document.createElement('select')
    select.name ='expense[category_id_' + (e + indexNumber) + ']';
    select.id ="expense_category_id_" + (e + indexNumber);
    select.className = "select-box"

    for(var i=0; i < option.length; i++ ){
    const op = document.createElement('option')
    op.value = option[i].val
    op.innerText = option[i].txt
    form.appendChild(select).appendChild(op);
    }

    const text1 = document.createElement('input')
    text1.type = 'text'
    text1.name ='expense[name_' + (e + indexNumber) +']' ;
    text1.id ='name_' + (e + indexNumber);
    text1.placeholder = '詳細' + (e + indexNumber);
    text1.className = "name-default"
  
    const text2 = document.createElement('input')
    text2.type = 'text'
    text2.name ='expense[price_' + (e + indexNumber) +']'
    text2.id ='price_' + (e + indexNumber);
    text2.placeholder = '値段' +(e + indexNumber);
    text2.className = "price-default"
  
    form.appendChild(text1)
    form.appendChild(text2)
    ++f; 
   });



   //削除機能
   const del = document.getElementById('delete')
   del.addEventListener('click',function(){
    
    const form = document.getElementById('form-group')
    let select = document.getElementsByClassName('select-box')
    let selectIndexNumber = select.length
    console.log(selectIndexNumber)
    let name = document.getElementsByClassName('name-default')
    const nameIndexNumber = name.length
    let price = document.getElementsByClassName('price-default')
    const priceIndexNumber = price.length

    const delSelectForm = document.getElementById(`expense_category_id_${selectIndexNumber}`)
    const delNameForm = document.getElementById(`name_${nameIndexNumber}`)
    const delPriceForm = document.getElementById(`price_${priceIndexNumber}`)

    form.removeChild(delSelectForm);
    form.removeChild(delNameForm);
    form.removeChild(delPriceForm);
   });   
  }
});
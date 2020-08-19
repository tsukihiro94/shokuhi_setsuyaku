window.addEventListener('load',function(){
  console.log("ok")

  
  let f = 1
  const e = 1

    const btn = document.getElementById('add')
  
  btn.addEventListener('click', function(){
    const form = document.getElementById('form-group')
  
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
    select.name ='expense[category_id_' + (e + f) + ']';
    select.id ="expense_category_id_" + (e + f);

    for(var i=0; i < option.length; i++ ){
    const op = document.createElement('option')
    op.value = option[i].val
    op.innerText = option[i].txt
    form.appendChild(select).appendChild(op);
    }

    const text1 = document.createElement('input')
    text1.type = 'text'
    text1.name ='expense[name_' + (e + f) +']' ;
    text1.id ='name_' + (e + f);
    text1.placeholder = '詳細' + (e + f);
  
    const text2 = document.createElement('input')
    text2.type = 'text'
    text2.name ='expense[price_' + (e + f) +']'
    text2.id ='price_' + (e + f);
    text2.placeholder = '値段' +(e + f);
  
    form.appendChild(text1)
    form.appendChild(text2)
    ++f; 
   });
   const del = document.getElementById('delete')
   del.addEventListener('click',function(){

    const form = document.getElementById('form-group')
    console.log(form)
    console.log(form.length);

    // const delForm = document.getElementById('name_' + )
    // form.removeChild(delForm);
   });   
  });
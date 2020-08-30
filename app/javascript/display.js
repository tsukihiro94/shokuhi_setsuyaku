window.addEventListener('DOMContentLoaded',() => {

  const posts = document.getElementsByClassName('post');
  const delBtn = document.getElementsByClassName('del')
  const userId = document.getElementById('user_id').value;
  let postUserIds= document.getElementsByClassName('post_user_id');

  for(let i = 0; i < posts.length; i++){
    
    posts[i].addEventListener('mouseover',()=>{
      const postUserId = postUserIds[i].value;
      if (userId == postUserId){
        delBtn[i].setAttribute("style", "display: block;");
      }
    });

    posts[i].addEventListener('mouseout', ()=>{
      const postUserId = postUserIds[i].value;
      if (userId == postUserId){
        delBtn[i].removeAttribute("style", "display: none;");
      }
    });
  }

  const text = document.getElementById('text');
  const btn = document.getElementById('submit-btn');

  text.addEventListener("input",function(){
    const textVal = text.value
    const counts = document.getElementById('counts');
    console.log(textVal.length)
    counts.textContent = `${textVal.length}/60`


    if (textVal.length > 0){
      btn.setAttribute("style", "background-color: wheat;");
    }else{
      btn.removeAttribute("style", "background-color: #FFF9EE;");
    }
  })

});
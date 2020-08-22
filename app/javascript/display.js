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
});
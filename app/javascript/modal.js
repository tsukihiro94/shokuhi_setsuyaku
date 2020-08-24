window.addEventListener('DOMContentLoaded',() => {

  const btn = document.getElementById('new_page');
  const modal = document.getElementById("modal")
  const close = document.getElementById('close_image')
    
    btn.addEventListener('click',()=>{
      
      console.log(modal)
        modal.setAttribute("style", "display: block;");
      });

      close.addEventListener('click', ()=>{
        modal.removeAttribute("style", "display: none;");
    });

});
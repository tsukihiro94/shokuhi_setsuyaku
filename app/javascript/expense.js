function memo(){
  const submit = document.getElementById("submit-btn");
  submit.addEventListener("click",(e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
      <div class = "post">
        <div class = "tape"></div>
       <div class = text>
          ${item.text}
        </div>
        <div class = "nickname">
        ${item.user_id.nickname}
      </div>
        <input type="hidden" class = "post_user_id" id ="post_user_id"  value =  post.user_id %> >
      <div class ="del">
        <%= link_to '消', "/posts/#{post.id}" , method: :delete, data: {confirm: "削除しますか？"}, class: "delBtn" %>
      </div>
    </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText.value = "";
    };
    e.preventDefault();
  });
}
window.addEventListener("load", memo);
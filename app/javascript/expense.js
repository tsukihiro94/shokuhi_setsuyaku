function expense(){
  const submit = document.getElementsByClassName("submit-btn");
  submit.addEventListener("click",(e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/expenses", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formGroup = document.getElementById("form-group");
      const HTML = 
      `<div class ="day">
        ${item.day}
      </div>
       ${i =+ 1}
    <div class = "name_price">
    <table>
    <tr>
      <td> eval${item[`name_` + i]}
           eval${item[`price_`+ i]}  
           eval${item[`name_` + (i + 1)]}
           eval${item[`price_` + (i + 1)]}
           eval${item[`name_` + (i + 2)]}
           eval${item[`price_` + (i + 2)]}
           eval${item[`name_` + (i + 3)]}
           eval${item[`price_` + (i + 3)]}
           eval${item[`name_` + (i + 4)]}
           eval${item[`price_` + (i + 4)]}
           eval${item[`name_` + (i + 5)]}
           eval${item[`price_` + (i + 5)]}
           eval${item[`name_` + (i + 6)]}
           eval${item[`price_` + (i + 6)]}
           eval${item[`name_` + (i + 7)]}
           eval${item[`price_` + (i + 7)]}
           eval${item[`name_` + (i + 8)]}
           eval${item[`price_` + (i + 8)]}
           eval${item[`name_` + (i + 9)]}
           eval${item[`price_` + (i + 9)]}</td>
    </tr>
    </table>
    </div`
    list.insertAdjacentHTML("afterend", HTML);
    formGroup.value = "";

    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
    } else {
      return null;
    }
    }
    XHR.onerror = function () {
      alert("Request failed");
    };

    e.preventDefault();

  });

}
window.addEventListener("load", expense);
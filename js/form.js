const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#fff";
  statusTxt.style.textShadow = "1px 3px 5px rgba(0, 0,0)";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Enviando tu mensaje...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (
        response.indexOf("El correo y mensaje son requeridos!") != -1 ||
        response.indexOf("Introduce un correo valido!") != -1 ||
        response.indexOf("Lo siento, no se ha podido enviar tu correo!" != -1)
      ) {
        statusTxt.style.color = "rgba(216, 63, 83)";
        statusTxt.style.letterSpacing = "1px";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 300);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  };
  let formdata = new FormData(form);
  xhr.send(formdata);
};

//SCROLL SCRIPT
window.addEventListener("scroll", function () {
  var bug = document.getElementById("bugs");

  var header = document.querySelector("header");

  var to_top = document.getElementById("to_top");

  var contacto = document.getElementById("contacto");

  var encabezado = document.getElementById("encabezado");

  var body = document.querySelector("body");

  var cont1 = document.getElementById("contenedor1");

  var visible = document.getElementById("contenido");

  var cont3 = document.getElementById("contenedor3");

  var txtshow = document.getElementById("txt_show");

  var txthide = document.getElementById("txt");

  bug.classList.toggle("bug_up", window.scrollY > 0);

  header.classList.toggle("abajo", window.scrollY > 0);

  to_top.classList.toggle("back_show", window.scrollY > 250);

  contacto.classList.toggle("contact_show", window.scrollY > 290);

  encabezado.classList.toggle("eliminar", window.scrollY > 0);

  body.classList.toggle("scroll", window.scrollY > 0);

  visible.classList.toggle("visible", window.scrollY > 150);

  cont1.classList.toggle("cont1", window.scrollY > 100);

  cont3.classList.toggle("cont3", window.scrollY > 1000);

  txtshow.classList.toggle("txtshow", window.scrollY > 0);

  txthide.classList.toggle("txthide", window.scrollY > 0);
});
//SCROLL SCRIPT FIN

//RANDOM COLOR

window.onload = function () {
  const colors = [
    "171,157,242",
    "255,97,136",
    "229,192,123",
    "169,220,118",
    "86,182,194",
  ];
  const index = Math.floor(Math.random() * colors.length);
  const color = colors[index];
  const css = `
    .bx.bxs-chevron-up{background:linear-gradient(to left, transparent 50%, rgba(${color}) 50%) no-repeat right / 200%;}
    .bx.bxs-chevron-up:hover{box-shadow: 5px 5px 0px rgba(${color},0.5);} 
    .txt:hover{text-shadow:4px 4px 1px rgba(${color},.4); }.txt{color:rgb(${color}); transition:0.5s ease;} 
    .contenedor1:hover{box-shadow: 18px 19px 0px -6px rgba(${color}, .5);}
    .txt_show:hover{text-shadow:4px 4px 1px rgba(${color},.4); }
    .txt_show{color:rgb(${color});} 
    .about{border-bottom: 3px solid rgb(${color},0.6);}
    .end_datos ul li i{background: rgba(${color});}
  `;
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName("head")[0].appendChild(style);
};

//RANDOM COLOR FIN

window.addEventListener("resize", socialhader);

function socialhader() {
  var link = document.getElementById("link");
  var beacon = document.getElementById("beacon");
  var git = document.getElementById("git");
  if (window.innerWidth > 1400) {
    link.textContent = "LinkedIN";
    beacon.textContent = "Redes Sociales";
    git.textContent = "Github";
  } else {
    link.innerHTML = '<i class="ph-linkedin-logo"></i>';
    beacon.innerHTML = '<i class="ph-share-network"></i>';
    git.innerHTML = '<i class="ph-github-logo"></i>';
  }
}

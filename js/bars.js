window.addEventListener("scroll", function () {
  var br1 = document.getElementById("bar_1-1");

  var br2 = document.getElementById("bar_2-1");

  var br3 = document.getElementById("bar_3-1");

  var br4 = document.getElementById("bar_4-1");

  var br5 = document.getElementById("bar_1-2");

  var br6 = document.getElementById("bar_2-2");

  var br7 = document.getElementById("bar_3-2");

  var br8 = document.getElementById("bar_4-2");

  var br9 = document.getElementById("bar_1-3");

  var br10 = document.getElementById("bar_2-3");

  br1.classList.toggle("down", window.scrollY > 200);

  br2.classList.toggle("down", window.scrollY > 200);

  br3.classList.toggle("down", window.scrollY > 200);

  br4.classList.toggle("down", window.scrollY > 200);

  br5.classList.toggle("down", window.scrollY > 400);

  br6.classList.toggle("down", window.scrollY > 400);

  br7.classList.toggle("down", window.scrollY > 400);

  br8.classList.toggle("down", window.scrollY > 400);

  br9.classList.toggle("down", window.scrollY > 600);

  br10.classList.toggle("down", window.scrollY > 600);
});

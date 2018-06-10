window.onload = function() {
    start();
  };
  
  function start() {
    
    var el = document.getElementById("data");
    var dateInterval = setInterval(setDate,1000);
    function setDate(){
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1; // Gener es el valor 0!
      var year = date.getFullYear();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      var fullDate = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
      el.innerHTML = fullDate;
    }
    alerta("cos","alert1","You are on Tour Page. Click on the X for closing this window","red")

  // Funció alerta
  function alerta(id_element_dest, nom_id, text_element, color_fons) {
    var div = document.createElement("div");

    div.style.textAlign = "left";
    div.style.padding = 16 + "px";
    div.style.backgroundColor = color_fons;
    div.style.border = 1 + "px solid black";
    div.id = nom_id;

    var img = document.createElement("img");
    img.src = "../img/portrait1.jpeg";
    img.style.width = 32 + "px";
    img.style.marginRight = 16 + "px";

    var span = document.createElement("span");
    span.textContent = text_element;

    var x = document.createElement("a");
    x.textContent = "X";
    x.style.cssFloat = "right";
    x.addEventListener("click", tancar_alerta, false);

    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(x);
    document.getElementById(id_element_dest).appendChild(div);
  }

  /* funció per eliminar la caixa de l'alerta a la que s'ha fet clic sobre la x */
  function tancar_alerta(event) {
    event.target.parentNode.remove();
  }
  }
  
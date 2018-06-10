window.onload = function() {
  start();
};

function start() {
  var el = document.getElementById("data"); // busquem l'element per cambia la data
  var dateInterval = setInterval(setDate, 1000); // Actualitzem la data cada segon (1000 milisegons)

  var currentBanner = 0; // variable per saber per quina posició del banner estem
  var bannerInterval = setInterval(bannerSwitch, 3000);

  // Funció per actualitzar la data
  function setDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1; // Gener es el valor 0!
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var fullDate =
      day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
    el.innerHTML = fullDate;
  }

  // Creem el tooltip
  var tooltip_element = document.getElementById("portrait2");

  // Event tooltip mouse per damunt
  tooltip_element.addEventListener(
    "mouseover",
    tooltip,
    false
  );
  
  // Event tooltip mouse fora
  tooltip_element.addEventListener(
      "mouseout",
      tooltip_remove,
      false
  )

  // Funció per al Tooltip sobre l'imatge de Kendrick
  function tooltip(event) {
    var coordinadaX = event.target.offsetLeft;
    var coordinadaY = event.target.offsetTop;
  
    var span = document.createElement("span");
    span.style.position = "absolute";
    span.className = "tooltip";
    span.style.left = coordinadaX + "px";
    span.style.top = coordinadaY + 20 + "px";
    span.style.fontSize = 18 + "px";
    span.style.color = "white";
    span.style.backgroundColor = "black";
    span.style.padding = 8 + "px";
    span.style.borderRadius = 14 + "px";
    span.textContent = "Hey! It's Me, Kendrick!";
    document.getElementById("tooltip").appendChild(span);
  }

  // Funció per eliminar el tooltip
  function tooltip_remove() {
    var tooltips = document.getElementsByClassName("tooltip");
    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].remove();
    }
  }

  alerta("cos","alert1","You are on Kendrick Page. Click on the X to closing this window","red")

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
  
  // Funció per actualitzar el banner
  function bannerSwitch(){
    currentBanner++;
    console.log(currentBanner);
    var el = document.getElementById('banner');
    var bannertitle = document.getElementById('banner_title');
    console.log(bannertitle)
    console.log('hey')
    switch(currentBanner){
      case 1:{
        bannertitle.innerHTML = "untitled unmastered."
        el.style.backgroundImage = "url('../img/album2.jpg')";
        break;
      }
      case 2:{
        bannertitle.innerHTML = "To Pimp a Butterfly"
        el.style.backgroundImage = "url('../img/album3.jpg')";
        break;
      }
      case 3:{
        bannertitle.innerHTML = "good kid, m.A.A.d city (Deluxe)"
        el.style.backgroundImage = "url('../img/album4.jpg')";
        break;
      }
      case 4:{
        bannertitle.innerHTML = "Section.80"
        el.style.backgroundImage = "url('../img/album5.jpg')";
        break;
      }
      case 5:{
        bannertitle.innerHTML = "Overly Dedicated"
        el.style.backgroundImage = "url('../img/album6.jpg')";
        break;
      }
      case 6:{
        currentBanner = 0;
        el.style.backgroundImage = "url('../img/album1.jpg')";
        bannertitle.innerHTML = "DAMN."
        break;
      }
    }
  }
}

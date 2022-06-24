let usuario = prompt("¿Podrias ingresar tu nombre?");
while (usuario == "") {
  usuario = prompt("¿Podrias ingresar tu nombre?");
}
alert("Bienvenido" + " " + usuario);

// -------------------------------------------------------Inicio Dom-----------------------------------------

document.getElementById("textoAseguraContraseña");

textoAseguraContraseña.innerText =
  usuario + " " + "Ingresa tu fecha de nacimiento";

const passVuelva = document.getElementById("passVuelva");

passVuelva.setAttribute("type", "date");

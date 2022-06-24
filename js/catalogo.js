let listaPrecios = [
  {
    ID: 1,
    nombre: "A way Out",
    precio: 2000,
  },
  {
    ID: 2,
    nombre: "Asassins Creed Unity",
    precio: 3500,
  },
  {
    ID: 3,
    nombre: "Asassins Creed Valhalla",
    precio: 5500,
  },
  {
    ID: 4,
    nombre: "Battlefield 5",
    precio: 3500,
  },
  {
    ID: 5,
    nombre: "Call of Duty Cold War",
    precio: 7500,
  },
  {
    ID: 6,
    nombre: "Call Of Duty World War 2",
    precio: 5000,
  },
  {
    ID: 7,
    nombre: "Cyberpunk 2077",
    precio: 2000,
  },
  {
    ID: 8,
    nombre: "Dirt 5",
    precio: 4000,
  },
  {
    ID: 9,
    nombre: "Dying Light",
    precio: 5000,
  },
  {
    ID: 10,
    nombre: "Elden ring",
    precio: 7500,
  },
  {
    ID: 11,
    nombre: "Far Cry 6",
    precio: 7000,
  },
  {
    ID: 12,
    nombre: "Fifa 22",
    precio: 3000,
  },
];

const IVA = 21;
const sumaIva = (x) => (x * 21) / 100;
const suma = (a, b) => a + b;

let botones = document.getElementsByClassName("addToCart");

for (let botoncitos of botones) {
  botoncitos.addEventListener("click", () => {
    alert(
      "El precio de este articulo es $" +
        listaPrecios.find((p) => p.ID == botoncitos.id).precio +
        "\nEl total seria: $" +
        suma(
          listaPrecios.find((p) => p.ID == botoncitos.id).precio,
          sumaIva(listaPrecios.find((p) => p.ID == botoncitos.id).precio)
        )
    );
  });
}

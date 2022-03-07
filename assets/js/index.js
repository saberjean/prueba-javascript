import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Serpiente from "./Serpiente.js";
import Oso from "./Oso.js";
import Aguila from "./Aguila.js";

(async () => {
  const url = "animales.json";

  try {
    // loadingData(true);
    const res = await fetch(url);
    const data = await res.json();
    registerAnimalAndCreateInstance(data);
    // addAnimal(data);
  } catch (error) {
    console.log(error);
  } finally {
    // loadingData(false);
  }
})();

console.log(registerAnimalAndCreateInstance.nombre())

const registerAnimalAndCreateInstance = (data) => {
  const btnRegistrar = document.getElementById("btnRegistrar");

  let animalArray = [];
  btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    const animal = document.getElementById("animal");
    const edad = document.getElementById("edad");
    const comentarios = document.getElementById("comentarios");
    const preview = document.getElementById("preview");

    let newAnimal;
    const { animales } = data;
    try {
      const instanceImage = animales.find(
        (animal) => animal.name === animal.value
      ).imagen;
      const instanceSound = animales.find(
        (animal) => animal.name === animal.value
      ).sonido;
      if (animal.value === "Leon") {
        newAnimal = new Leon(
          `${animal.value}`,
          `${edad.value}`,
          `assets/imgs/${instanceImage}`,
          `${comentarios.value}`,
          `assets/sounds/${instanceSound}`
        );
      } else if (animal.value === "Lobo") {
        newAnimal = new Lobo(
          `${animal.value}`,
          `${edad.value}`,
          `assets/imgs/${instanceImage}`,
          `${comentarios.value}`,
          `assets/sounds/${instanceSound}`
        );
      } else if (animal.value === "Oso") {
        newAnimal = new Oso(
          `${animal.value}`,
          `${edad.value}`,
          `assets/imgs/${instanceImage}`,
          `${comentarios.value}`,
          `assets/sounds/${instanceSound}`
        );
      } else if (animal.value === "Serpiente") {
        newAnimal = new Serpiente(
          `${animal.value}`,
          `${edad.value}`,
          `assets/imgs/${instanceImage}`,
          `${comentarios.value}`,
          `assets/sounds/${instanceSound}`
        );
      } else if (animal.value === "Aguila") {
        newAnimal = new Aguila(
          `${animal.value}`,
          `${edad.value}`,
          `assets/imgs/${instanceImage}`,
          `${comentarios.value}`,
          `assets/sounds/${instanceSound}`
        );
      }
    } catch (error) {
      document.getElementById("error").classList.remove("d-none");
      setTimeout(() => {
        document.getElementById("error").classList.add("d-none");
      }, 3000);
    }
  });
};
console.log(Animalarray)

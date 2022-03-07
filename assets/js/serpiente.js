import Animal from "./animal.js";

class Serpiente extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Sisear() {
		console.log(`La ${this._nombre} hace este sonido ${this._sonido}`);
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
export default Serpiente
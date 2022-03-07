import Animal from "./animal.js";

class Lobo extends Animal {
	
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	Aullar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
export default Lobo
const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, data, previusHash = "") {
    this.index = index; //posicion que ocupa
    this.date = new Date(); //fecha en la que se crea
    this.data = data; //info del bloque
    this.previusHash = previusHash; //el hash anterior
    this.hash = this.createHash(); //hash de este bloque
    this.nonce = 0; //grado de dificultad
  }

  createHash() {
    return SHA256(
      this.index + this.date + this.data + this.previusHash + this.nonce
    ).toString();
  }

  mine(difficulty) {
    console.log(difficulty)
    //startWhith() indica si una cadena de texto comienza en kis caracteres de
    // cadena de texto concreto, devolviendo true o false
    while (!this.hash.startsWith(difficulty)) {
      this.nonce++;
      this.hash = this.createHash();
    }
  }
}

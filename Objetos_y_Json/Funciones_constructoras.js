function Course(title){
    this.title = title;
    this.inscribir = function(){}
}

/**la palabra new antes del nombre de la funcion de arriba
 * la combierte es una funcion constructora. .
 * La primera letra de la funcion debe ser en mayuscula cuando esta
 * sera una funcion constructora
 */
let objeto = new Course("Curso de Ruby");
console.log(objeto);
//Object { title: "Curso de Ruby", inscribir: inscribir() }
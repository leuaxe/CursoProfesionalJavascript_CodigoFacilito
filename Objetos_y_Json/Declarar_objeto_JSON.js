// Javascript Object Notation -> JSON

let curso = {
    titulo : "Curso profesional de JS",
    formato : "video",
    bloques: ["Introduccion", "Funciones"],
    inscribir: function(){
        console.log("Inscrito");
    }
}

curso.titulo = "Curso de Ruby";
//modificar el metodo
curso["inscribir"] = function(){ console.log("Inscribir v2"); }

console.log(curso.titulo)
curso.inscribir();
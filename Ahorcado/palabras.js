const bancoPalabras = [    "contable",
    "nutricion",
    "auditar",
    "diseñar",
    "diagramar",
    "organizar",
    "jugar",
    "analizar",
    "mandarina",
    "frutilla",
    "kinoto",
    "arandano",
    "granada",
    "fresas",
    "pomelo",
    "aguacate",
    "bombero",
    "minero",
    "dentista",
    "enfermera",
    "cocinero",
    "medico",
    "albañil",
    "ingeniera",
    "bahamas",
    "dinamarca",
    "filipinas",
    "argentina",
    "brasil",
    "ucrania",
    "francia",
    "australia",
    "crustaceo",
    "molusco",
    "acuatico",
    "salvaje",
    "terrestre",
    "herbivoro",
    "carnivoro",
    "domestico",
]

function validarPalabra(letraIngresada) {
    const pattern = new RegExp('^[A-Z\u00d1]+$', 'i');
    if(!pattern.test(letraIngresada)) {
        swal("¡Solo letras!", `Ha ingresado "${letraIngresada.toUpperCase()}" y solo se permiten letras.`, "warning");
        return false;
    } else {
        return true;
    }
}

function crearMsjError(msjError){
    if(msjError.length > 0){
        var elementoError = document.querySelector("#msjError");
        elementoError.textContent = msjError;
    }
}

function vaciarMsj(id){
    var mensajeError = document.querySelector(id);
    mensajeError.innerHTML = "";
}

function msjPalabraCorrecta(nuevaPalabra){
    var msjPalabraCorrecta = document.querySelector("#msjCorrecto");
    msjPalabraCorrecta.innerHTML = "La palabra " + nuevaPalabra + " fue agregada con éxito";       
    }
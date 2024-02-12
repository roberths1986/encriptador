let btnEncriptar = document.getElementById("btn-Encriptar");
let btnDesencriptar = document.getElementById("btn-Desencriptar")
let btnCopiar = document.getElementById("botonCopiar")

let muneco = document.getElementById("muneco");
let aviso = document.getElementById("aviso");
let containerEncriptado = document.getElementById("contenedor-Encriptado");

let ingresarTexto = document.getElementById("ingresarTexto");
let textoEncriptado = document.getElementById("textoEncriptado");

function formatoPrimeraLetra(event) {
    let texto = event.target.value;
    // Convertir la primera letra en minúscula si la primera palabra está en mayúscula
    texto = texto.charAt(0).toLowerCase() + texto.slice(1);
    // Aplicar la restricción de patrón para permitir solo letras minúsculas, números y espacios
    texto = texto.replace(/[^a-z0-9\s]/g, '');
    // Actualizar el valor del textarea con el texto formateado
    event.target.value = texto;
}

function ocultarMuneco() {
    muneco.classList.add("ocultar");
    aviso.classList.add("ocultar");
    containerEncriptado.classList.remove("ocultar");
}

function mostrarMuneco() {
    muneco.classList.remove("ocultar");
    aviso.classList.remove("ocultar");
    containerEncriptado.classList.add("ocultar");
}

function encriptadorTexto(texto) {

    let codigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]] 
    for (let i=0;i<codigo.length;i++) { 
        if(texto.includes(codigo[i][0])) { 
            texto = texto.replaceAll(codigo[i][0], codigo[i][1]) 
        } 
    }

    return texto;
}

function mostrarTextoEncriptado() {
    let texto = ingresarTexto.value;
    let encriptado = encriptadorTexto(texto);

    if (texto != '') {
        ocultarMuneco();
    } else {
        mostrarMuneco();
    }

    ingresarTexto.value = '';

    botonCopiar.textContent = "Copiar";

    textoEncriptado.textContent = encriptado;

    textoEncriptado.style.height = `${textoEncriptado.scrollHeight}px`; //para que la altura sea igual que el contenido el textarea
}

function desEncriptadorTexto(texto) {

    let codigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]] 
    for (let i=0;i<codigo.length;i++) { 
        if(texto.includes(codigo[i][1])) { 
            texto = texto.replaceAll(codigo[i][1],codigo[i][0]) 
        } 
    }

    return texto;
}

function mostrarTextoDesencriptado() {
    let texto = ingresarTexto.value;
    let desencriptado = desEncriptadorTexto(texto);

    if (texto != "") {
        ocultarMuneco();
    } else {
        mostrarMuneco();
    }

    ingresarTexto.value = '';

    botonCopiar.textContent = "Copiar";

    textoEncriptado.textContent = desencriptado;

    textoEncriptado.style.height = `${textoEncriptado.scrollHeight}px`; //para que la altura sea igual que el contenido el textarea
}

function copiarTexto(){
    let texto = textoEncriptado.value;
    navigator.clipboard.writeText(texto);

    btnCopiar.textContent = "Copiado!";
}

btnEncriptar.addEventListener('click', mostrarTextoEncriptado);

btnDesencriptar.addEventListener('click', mostrarTextoDesencriptado);

btnCopiar.addEventListener('click', copiarTexto);
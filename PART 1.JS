// PART 1:
// SELECCIONAM ELS ELEMENTS DEL FORMULARI:

let formulari= document.getElementById("Formulari");
let nom= document.getElementById("Nom");
let edat= document.getElementById("Edat");
let codipostal= document.getElementById("Codipostal");  
let email= document.getElementById("Email");
let constr= document.getElementById("Constrasenya");
let confirmacio= document.getElementById("Confirmacio");
let privacitat= document.getElementById("Privacitat");
let resultat= document.getElementById("Resultat");

// FUNCIÓ PER MOSTRAR ELS ERRORS:
function mostrarerrors(camp,missatge, iderror) {
    document.getElementById(iderror). textContent=missatge;
    camp.style.border="2px solid red";
}

// FUNCIÓ PER DIR SI UN CAMP ÉS CORRECTE:
function campcorrecte(camp, iderror) {
    document.getElementById(iderror).textContent = "";
    camp.style.border = "2px solid green";
}
// VALIDAR NOMS I COGNOMS:
function validarnom(){
    let valor= nom.ariaValueMax.trim();

    if( valor===""){
        mostrarerrors(nom, "Has d'introduir el nom i cognoms.", "errornom");
        return false;
    }
// // Posem la primera lletra de cada paraula en majúscula
//     let paraules = valor.split(" ");

//     for (let i = 0; i < paraules.length; i++) {
//         if (paraules[i].length > 0) {
//             paraules[i] = paraules[i][0].toUpperCase() +
//                 paraules[i].substring(1);
//         }
//     }

//     nom.value = paraules.join(" ");

//     campcorrecte(nom, "errorNom");
//     return true;
}
// -----------------------------
// VALIDAR EDAT:
function validarEdat() {
    if (edat.value === "") {
        mostrarerrors(edat, "Has de seleccionar un rang d'edat.", "errorEdat");
        return false;
    }
    campcorrecte(edat, "errorEdat");
    return true;
}
// -----------------------------
// VALIDAR EL CODI POSTAL:
function validarcodi() {
    let valor = codiPostal.value;

    if (valor.length != 5) {
        mostrarerrors(codiPostal, "El codi postal ha de tenir 5 dígits.", "errorCodi");
        return false;
    }
    if (isNaN(valor)) {
        mostrarerrors(codiPostal, "El codi postal només pot tenir números.", "errorCodi");
        return false;
    }
    campcorrecte(codiPostal, "errorCodi");
    return true;
}
// VALIDAR EMAIL:
function validaremail() {

    let valor = email.value;

    if (!valor.includes("@") || !valor.includes(".")) {
        mostrarerrors(email, "El correu ha de contenir una @ i un punt.", "errorEmail");
        return false;
    }

    campcorrecte(email, "errorEmail");
    return true;
}
// VALIDAR CONTRASENYA:
function validarcontrasenya() {

    let valor = contrasenya.value;

    if (valor.length < 8) {
        mostrarerrors(contrasenya, "La contrasenya ha de tenir mínim 8 caràcters.", "errorPassword");
        return false;
    }
    if (!valor.match(/[A-Z]/)) {
        mostrarerrors(contrasenya, "Falta una majúscula.", "errorPassword");
        return false;
    }
    if (!valor.match(/[a-z]/)) {
        mostrarerrors(contrasenya, "Falta una minúscula.", "errorPassword");
        return false;
    }
    if (!valor.match(/[0-9].*[0-9]/)) {
        mostrarerrors(contrasenya, "Necessites dos números.", "errorPassword");
        return false;
    }
    if (!valor.match(/[!@#$%&?]/)) {
        mostrarerrors(contrasenya, "Falta un signe especial.", "errorPassword");
        return false;
    }
    campcorrecte(contrasenya, "errorPassword");
    return true;
}
// VALIDAR CONFIRMACIÓ DE CONTRASENYA:
function validarconfirmacio() {

    if (confirmacio.value != contrasenya.value || confirmacio.value == "") {
        mostrarerrors(confirmacio, "Les contrasenyes no coincideixen.", "errorConfirmacio");
        return false;
    }
    campcorrecte(confirmacio, "errorConfirmacio");
    return true;
}
// VALIDAR PRIVACITAT:
function validarprivacitat() {

    if (privacitat.checked == false) {
        document.getElementById("errorPrivacitat").textContent = "Has d'acceptar la política de privacitat.";
        return false;
    }
    document.getElementById("errorPrivacitat").textContent = "";
    return true;
}
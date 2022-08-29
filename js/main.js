
function ingresarNombre () {
    alert ("Bienvenido/a a Malone - Fabricamos lo que nos gusta 🍕");
    let nombre = prompt ("Ingrese su nombre");
    let apellido = prompt ("Ingrese su apellido");
    let direccion = prompt ("Ingrese su dirección exacta");
    while (nombre === "" || apellido=== "" || direccion === "") {
        nombre = prompt ("Ingrese su nombre");
        apellido = prompt ("Ingrese su apellido");
        direccion = prompt ("Ingrese su dirección exacta");
    }
    console.log("Hola " + nombre + " " + apellido);
    alert ("Hola " + nombre + " " + apellido + "," + " ¿Listo/a para realizar su pedido?")
}

function mostrarMenu () {
    let menu;
    do {
    menu = parseInt (prompt ("¿Qué se le antoja hoy 🤤?:\n1: 12 empanadas + 2 salsas (a elección) $2000. \n2: 3 Muzzarellas grandes $2630. \n3: 8 Empanadas (a elección) + Bebida 1,5 lt (línea Coca-Cola) $1450. \n4: 1 Pizza mediana (Jamón/Napolitana/Muzzarella) + 6 Empanadas (a elección) $1630."))} 
    while (menu != 1 && menu!=2 && menu!=3 && menu!=4)
    switch (menu) {
        case 1:
            return "Promo 1";
        case 2:
            return "Promo 2";
        case 3:
            return "Promo 3";
        case 4:
            return "Promo 4";
    }
}

function validarPrecio (menu) {
    if (menu === "Promo 1") {
        return 2000;
    }
    else if (menu === "Promo 2") {
        return 2630;
    }
    else if (menu=== "Promo 3") {
        return 1450;
    }
    else if (menu === "Promo 4") {
        return 1630;
    }
    else {
        console.log("No es una opción válida");
    }

}

function cobrar (nombre,precio) {
alert ("Usted seleccionó lo siguiente: " +nombre +"\nPrecio: $"+precio);
let pago = parseInt (prompt ("¿Con cuánto va a pagar?"))
if (pago>= precio) {
    alert ("Gracias por su pedido, su vuelto es " + "$" + (pago - precio) + "," + " enseguida se lo enviaremos a su domicilio." + "\nDemora estimada: 30 minutos.")
} else {
    alert ("No te alcanza para realizar tu pedido 😫")
}
}

ingresarNombre ();
let menuNombre = mostrarMenu ();
let precioMenu = validarPrecio (menuNombre);
cobrar (menuNombre, precioMenu)

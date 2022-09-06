// Arrays 
const productos = [];
const carrito = [];
const totalPrecio = [];

// Variables de Login
let user = "Aldi";
let pass = "1234";


// Variables de proceso
let productoFiltrado;
let productoElegido;
let productoCarrito;
let precioProducto;
let promo;
let totalPrecioPromo = 0;
let userIngresado;
let passIngresado;
let direccion;
let pago;

// Constructor de objetos
class producto {
    constructor (id,nombre, precio) { 
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}
}

//Objetos construidos
let promo1 = new producto (1, "6 empanadas clásicas + bebida de 500cc", 650);
let promo2 = new producto (2, "1/2 pizza de Muzza + bebida de 500cc", 650);
let promo3 = new producto (3, "1/2 pizza de Muzza + 4 empanadas clásicas + 2 bebidas de 500cc", 1100);
let promo4 = new producto (4, "1 pizza de Muzza + 4 empanadas clásicas + 1 bebida 1,5 Lt", 1650);
let promo5 = new producto (5, "1 pizza especial + 6 empanadas mixtas + 1 bebida 1,5 Lt", 2050);
let promo6 = new producto (6, "1 pizza especial + 12 empanadas mixtas + 1 bebida 1,5 Lt", 2590);

// Objetos pusheados al Array de productos
productos.push (promo1, promo2, promo3, promo4, promo5, promo6);
console.log(productos);

// Login - acceso
ingreso ();
if (validacion) { //Pueden pedir productos si la validación del user es True
    pedirProducto ();
    while (validacion) {
    productoIngresado ();

}
sumarCarrito ();
}

// funciones:

// Funcion Login 
function ingreso () {
    for (i=0; i<3; i++) {
        alert ("Bienvenido/a a Malone - Fabricamos lo que nos gusta 🍕");

        userIngresado = prompt("Ingrese su nombre de usuario");
        passIngresado = prompt("Ingrese su contraseña");
        let direccion = prompt ("Ingrese su direccion exacta");

        if (userIngresado == user && pass == passIngresado) {
            console.log("Ingreso exitoso")
            alert("Ingreso exitoso");
            validacion = true;
            break;
        }
        else {
            validacion = false
            console.log(validacion)
            if (userIngresado !== user && passIngresado == pass) {
                console.log("Usuario invalido");
                alert("Usuario inválido");
                validacion = false;
            }
            else {
                if (userIngresado == user && passIngresado !== pass) {
                    console.log("Contraseña invalida");
                    alert("Contraseña invalida")
                    validacion = false;
                }
                else {
                    console.log("Usuario y contraseña invalidos")
                    alert("usuario y contraseña invalidos")
                    validacion = false;
                }
            }
        } 
    }
    if (validacion == false) {
    console.log("Superó el límite de intentos")
    alert("Superó el limite de intentos")
    }
}

// funcion Ingresar producto por el cliente
function pedirProducto () {
    productoElegido = prompt("¿Qué se le antoja hoy 🤤?:\n1:6 empanadas clásicas + bebida de 500cc $650. \n2:1/2 pizza de Muzza + bebida de 500cc $650. \n3:1/2 pizza de Muzza + 4 empanadas clásicas + 2 bebidas de 500cc $1100. \n4:1 pizza de Muzza + 4 empanadas clásicas + 1 bebida 1,5 Lt $1650. \n5:1 pizza especial + 6 empanadas mixtas + 1 bebida 1,5 Lt $2050. \n6:1 pizza especial + 12 empanadas mixtas + 1 bebida 1,5 Lt $2590. \n O presione n para salir.");
    console.log(productoElegido);
    if (productoElegido === "n") {
        validacion = false
        console.log(`${userIngresado}" Gracias por realizar tu pedido, enseguida se lo enviaremos a su domicilio." + "\nDemora estimada: 30 minutos."`);
        alert(`${userIngresado} Gracias por realizar tu pedido, enseguida se lo enviaremos a su domicilio.\nDemora estimada: 30 minutos.`);
    }
    else {
        validacion = true
    }
}

function productoIngresado () {
    productoFiltrado = productos.find (item => item.id == productoElegido);
    console.log(productoFiltrado);

    promo = prompt("Ingrese cuantas promociones desea");
    totalPrecioPromo = productoFiltrado.precio * promo;
    console.log(totalPrecioPromo);


    alert(`El producto seleccionado es ${productoFiltrado.nombre} 
    El precio de la promo es $${productoFiltrado.precio} 
    Usted ha solicitado ${promo}.
    El total es de $${totalPrecioPromo}`);

    carrito.push(productoFiltrado); //Array carrito de compras
    console.log(carrito, carrito);


    totalPrecio.push(totalPrecioPromo); //Array subtotal de precios
    console.log(totalPrecio);

    pedirProducto ();
}

function sumarCarrito () {
    precioProducto = totalPrecio.reduce((total, producto) => total + producto, 0)
    console.log(precioProducto);
    alert(`El costo total de su compra es de $${precioProducto}`)
    let pago = parseInt (prompt ("¿Con cuánto va a pagar?"))
    if (pago >= totalPrecio) {
    alert ("Su vuelto es $" + (pago - totalPrecio));
    } else
    alert ("No te alcanza");
}





class Prestamo {
  constructor(nombre, monto, pagos) {
    this.nombre = nombre;
    this.monto = monto;
    this.pagos = pagos;
    this.montoFinal = 0;
  }

  calcularPagos(monto, pagos) {
    let interes;

    if (pagos == 1) {
      this.montoFinal = monto;
    } 
    else if (pagos == 3) {
      interes = monto * 0.30;
      this.montoFinal = monto + interes;
    }
     else if (pagos == 6) {
      interes = monto * 0.60;
      this.montoFinal = monto + interes;
    } 
    else if (pagos == 12) {
      interes = monto * 0.90;
      this.montoFinal = monto + interes;
    }
  }

  getDatosPrestamo(){
    console.log("<----------Prestamo----------->");
    console.log("Titular: ", this.nombre);
    console.log("Monto: ", this.monto);
    console.log("Cantidad de pagos: ", this.pagos);
    console.log("En total pagara: ", this.montoFinal);
    console.log("  ");
  }
}

function filtrarPrestamos(objetoPrestamo){
    return objetoPrestamo.nombre == nombre
}


let nombreUsuario = "";
let listaPrestamo = [];

while (nombreUsuario != "fin") {
  nombreUsuario = prompt("Ingrese su nombre o escriba fin para finalizar");

  if (nombreUsuario != "fin") {
    let monto = prompt("Ingrese el monto");
    monto = parseFloat(monto);
    console.log("1 pagos: sin intereses");
    console.log("3 pagos: 30% de intereses");
    console.log("6 pagos: 60% de intereses");
    console.log("12 pagos: 90% de intereses");

    let pagos = prompt("ingrese la cantidad de pagos");

    let objetoPrestamo = new Prestamo(nombreUsuario, monto, pagos);
    objetoPrestamo.calcularPagos(monto,pagos)
    listaPrestamo.push(objetoPrestamo);
    console.log("Gracias por su preferencia");
  }
}


let opcion = prompt ("Escriba el numero de la opcion deseada: \n 1.- Ver todos los prestamos \n 2.- Ver tus prestamos ");

let nombre;

if (opcion == "1"){
    console.log("HISTORIAL DE PRESTAMOS");
    for(let prestamo of listaPrestamo){
        prestamo.getDatosPrestamo();
    }
}
else if (opcion == 2 ){
    nombre = prompt ("Ingrese el nombre que desea buscar");
    let resultadoFilter = listaPrestamo.filter(filtrarPrestamos);

    for (let prestamo of resultadoFilter){
        prestamo.getDatosPrestamo();
    }
}




let origen = parseFloat (prompt ("Ingrese el numero del pais en el que te encunetras: \n 1.-México \n 2.-España \n 3.-Argentina"))


if (origen == 1){
    alert("El costo por cada uno de sus boletos sera de $3,600.00 MXN");
    let boletos = parseInt (prompt ("Ingrese la cantidad de boletos deseada"));
    for (let i = 0 ; i < boletos ; i = i + 1) {
        console.log(i + " $3.600.00 MXN");
    }
    let total = 3600 * boletos
    console.log( "El total de tu compra es $" + total + " MXN");
}
else if (origen == 2){
    alert("El costo por cada uno de sus boletos sera de €185.48 EUR");
    let boletos = parseInt (prompt ("Ingrese la cantidad de boletos deseada"));
    for (let i = 0 ; i < boletos ; i = i + 1) {
        console.log(i + " €185.48 EUR");
    }
    let total = 185.48 * boletos
    console.log( "El total de tu compra es €" + total + " EUR");
}
else if (origen == 3){
    alert("El costo por cada uno de sus boletos sera de $181,755.52 ARS");
    let boletos = parseInt (prompt ("Ingrese la cantidad de boletos deseada"));
    for (let i = 0 ; i < boletos ; i = i + 1) {
        console.log(i + " $181,755.52 ARS");
    }
    let total = 181755.52 * boletos
    console.log( "El total de tu compra es €" + total + " EUR");
}
else {
    alert("Ingrese un pais de la lista por favor")
}
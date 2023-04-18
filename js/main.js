let sumarTotal = 0;
let sumaBrasil = 0;
let sumaGuanes = 0;
let sumaExcelso = 0;
let sumaDeLaCasa = 0;
let medioDePago = 0;
let precio = 0;

while (true) {
    canasto = prompt(`seleccione el tipo de cafe que desea, escribiendo:
1, para brasil minas gerais 500gr
2, para colombia guanes 500gr
3, para colombia excelso 500gr
4, para blend de la casa 500gr
o "fin" para finalizar`);

    if (canasto == 1) {
        precio = 2900;
        sumarTotal += precio;
        sumaBrasil += 1;
    } else if (canasto == 2) {
        precio = 3000;
        sumarTotal += precio;
        sumaGuanes += 1;
    } else if (canasto == 3) {
        precio = 3200;
        sumarTotal += precio;
        sumaExcelso += 1;
    } else if (canasto == 4) {
        precio = 4000;
        sumarTotal += precio;
        sumaDeLaCasa += 1;
    } else if (canasto == "fin" || canasto == "FIN") {
        alert(`el total es ${sumarTotal} pesos`);
        break;
    } else {
        alert("opcion invalida, reintente");
        continue;
    }
    alert(`el total es : ${sumarTotal} pesos.`);
}

/* segunda parte */

function valorfinal() {
    alert(`usted ha comprado:
    ${sumaBrasil} paquetes de 500g de cafe de Brasil
    ${sumaGuanes} paquetes de 500g de cafe Colombia Guanes
    ${sumaExcelso} paquetes de 500g de cafe de Colombia Excelso
    ${sumaDeLaCasa} paquetes de 500g de cafe de la casa
    el total de la compra es de ${sumarTotal} pesos.`);

    while (sumarTotal != 0) {
        medioDePago = prompt(`
        Seleccione medio de pago:
        1 para efectivo 
        2 para débito
        3 para crédito`);

        if (
            medioDePago == 1 ||
            medioDePago == 2 ||
            medioDePago == 3
            
        ) {
        switch (medioDePago) {
            case "1":
                alert(`Por favor, abone ${sumarTotal} pesos.
            Muchas gracias`);
                break;
            case "2":
                alert(`Por favor, abone ${sumarTotal} pesos con su tarjeta de débito.
            Muchas gracias`);
                break;
            case "3":
                let pagoEnCuotas = Math.floor(sumarTotal / 3);
                alert(`Usted tiene un pago de ${sumarTotal} pesos ó 3 pagos de ${pagoEnCuotas} pesos sin interés.
                El total seria de ${sumarTotal} pesos.
                Muchas gracias`);
                break;
        }
        break;
        } else {
            alert("Por favor, ingrese un medio de pago válido");
            continue;
        }
    }
}

valorfinal();

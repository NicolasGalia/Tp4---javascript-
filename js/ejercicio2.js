// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// Rectángulos


let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar(montoIngresar){
      this.saldo = this.saldo + montoIngresar
},
extraer(montoExtraer){
    if (this.saldo >= montoExtraer){
        this.saldo -= montoExtraer 
    }else (
        alert ("Fondos Insuficientes")
    )
},
informar(){
    console.log(this);
    document.write("<p> la cuenta del usuario " + this.titular + ", contiene un saldo de $" + this.saldo + "</p>");
}
}
cuenta.titular;
// console.log(this); = windows object.
cuenta.informar();

let deposito = parseFloat(prompt("ingrese un monto"));
cuenta.ingresar(deposito);
cuenta.informar();

let montoExtraer = parseFloat(prompt("ingrese un monto a extraer"));
cuenta.extraer(montoExtraer);
cuenta.informar();

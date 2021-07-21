//Variables

    //Generales
let form = document.querySelector('form') //usado en la clase Interface
let btn = document.querySelector('button')



    //Leen data
let presupuesto = Number(prompt("Ingresa tu presupuesto total, es NECESARIO."))
let restante = presupuesto
let gastoNombre = document.querySelector('#gastoNombre')
let gastoMonto = document.querySelector('#gastoMonto')



//Clases

class Interface{
    printPresupuesto(presupuesto){
        let presupuestoP = document.createElement("p");
        let presupuestoBox = document.querySelector('.box_out_data_presupuesto')
        
        presupuestoP.classList.add('presupuesto-text')
        presupuestoP.innerHTML = `
            Tu presupuesto: <b>${presupuesto}</b>
        `;

        presupuestoBox.append(presupuestoP)

        //Añadir a dom

    }

    printRestante(restante,alerta="normalPresupuesto"){
        let restanteBox = document.querySelector('.box_out_data_restante')
        let restanteBox1P = document.querySelector('.box_out_data_restante p')

        restanteBox.classList.add(alerta)

        if (restanteBox1P) {
            restanteBox1P.remove()
        }

        let restanteP = document.createElement("p");

        restanteP.innerHTML = `
        Despues de gastos: <b>${restante}</b>
    `;

        restanteBox.append(restanteP)
    }

    printError(mensaje){
        let mensajeP = document.createElement("p");
        mensajeP.innerText = mensaje;
        mensajeP.classList.add("error")

        form.appendChild(mensajeP)

        setTimeout(() => {
            mensajeP.remove()
        }, 2000);
    }

    printNuevoRegistro(nuevoRegistro){
        let name= nuevoRegistro.name
        let monto = nuevoRegistro.monto
        let nuevoRegistroBox = document.querySelector('.box_out_data_registros')

        let nuevoRegistroP = document.createElement("div")
        nuevoRegistroP.innerHTML = `
            <p>${name}</p>
            <span class="nuevo-registro_monto">${monto}</span>
        `;
        nuevoRegistroP.classList.add("nuevo-registro")

        nuevoRegistroBox.append(nuevoRegistroP)

    }
}


let ui = new Interface()


ui.printPresupuesto(presupuesto)
ui.printRestante(restante)
//ui.printError("Faltan datos")


//EventListeners

btn.addEventListener("click",validarRegistrar)


document.addEventListener("DOMContentLoaded",validarIngreso)




//Funciones
function validarRegistrar(e) {
    e.preventDefault()

    //Validar que haya datos
    let validarDatos = validar()

    if (validarDatos) {
        //console.log("Habemus data");

        //Registrar Data
        registrar()

        //Descontar dinero
        descontar()

    } else{
        //console.log("NO habemus data");

    }
    
}

function validar() {
    //console.log("Hola desde validar");
    //console.log(gastoNombre.value);
    //console.log(gastoMonto.value);

    if (gastoNombre.value && gastoMonto.value) {
        //console.log("Estan llenos");
        return true

    } else {
        //console.log("Estan vacios");
        ui.printError("Faltan datos")
        return false
    }
}

function validarIngreso(){
    if (!presupuesto) {
        location.reload();
    }
}

function registrar(){
    
    let nuevoRegistro = {
        name: gastoNombre.value,
        monto: Number(gastoMonto.value)
    }

    //console.log(nuevoRegistro.name);
    //console.log(nuevoRegistro.monto);

    ui.printNuevoRegistro(nuevoRegistro)

}

function descontar(){
    let alerta;
    restante = restante - Number(gastoMonto.value)

    if (presupuesto/5 >= restante) {
        alerta = "peligroPresupuesto"
        console.log("peligro");

    } else if(presupuesto/2 >= restante) {
        alerta = "cuidadoPresupuesto"
        console.log("cuidado");
    }

    ui.printRestante(restante,alerta)

}
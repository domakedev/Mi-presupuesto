//Variables
let presupuesto = prompt("Ingresa tu presupuesto total")
let form = document.querySelector('form')
let registroCarro = {
    name: "Transporte",
    monto: 200
}

//Clases

class Interface{
    printPresupuesto(presupuesto){
        let presupuestoP = document.createElement("p");
        let presupuestoBox = document.querySelector('.box_out_data_presupuesto')
        
        presupuestoP.classList.add('presupuesto-text')
        presupuestoP.innerHTML = `
            Tu presupuesto ingresado es de: <b>${presupuesto}</b>
        `;

        presupuestoBox.append(presupuestoP)

        //Añadir a dom

    }

    printRestante(restante){
        let restanteBox = document.querySelector('.box_out_data_restante')
        let restanteP = document.createElement("p");

        restanteP.innerHTML = `
        Tu presupuesto restante es de: <b>${restante}</b>
    `;

        restanteBox.append(restanteP)
    }

    printError(mensaje){
        let mensajeP = document.createElement("p");
        mensajeP.innerText = mensaje;
        mensajeP.classList.add("error")

        form.appendChild(mensajeP)
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
ui.printRestante(presupuesto)
ui.printError("Faltan datos")
ui.printNuevoRegistro(registroCarro)


//EventListeners
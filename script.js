// Regra de negocio --------------------------------

// Carne - 400 gr pessoa + de 6 horas - 650 gr
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refri/Agua - 1000 ml por pessoa + 6 horas 1500 ml

//crianças valem por 0,5

//----------------------------------------------------

//Variaveis----------------

let inputAdulto = document.getElementById('input_adulto');
let inputCrianca = document.getElementById('input_crianca');
let inputHora = document.getElementById('input_hora');
let btnCalcular = document.getElementById('btn_calcular');
let divPar = document.getElementsByClassName('container_par')[0]
let parCarne = document.getElementsByTagName('p')[0]
let parCerveja = document.getElementsByTagName('p')[1]
let parRefri = document.getElementsByTagName('p')[2]


//Funções ------------------

let calcCarne = function(adultos, criancas, horas){
    // Carne - 400 gr pessoa + de 6 horas - 650 gr
    if(horas <= 6){
        return ((adultos + criancas) * 400) / 1000
    }else{
        return ((adultos + criancas) * 650) / 1000
    }
}

let calcCerveja = function(adultos, horas){
    // Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
    let lataML = 350
    if(horas <= 6){
        return Math.round((adultos * 1200) / lataML)
    }else{
        return Math.round((adultos * 2000) / lataML)
    }
}

let calcRefri = function(adultos, criancas, horas){
    // Refri/Agua - 1000 ml por pessoa + 6 horas 1500 ml
    if(horas <= 6){
        return Math.ceil(((adultos + criancas) * 1000) / 2000)
    }else{
        return Math.ceil(((adultos + criancas) * 1500) / 2000)
    }

}

// Eventos ------------------------

btnCalcular.addEventListener('click',() => {
    let num_adultos = Number(inputAdulto.value)
    let num_criancas = Number(inputCrianca.value) / 2
    let num_horas = Number(inputHora.value)

    divPar.className = 'conatiner_par' 

    parCarne.innerHTML = calcCarne(num_adultos, num_criancas, num_horas) + ' Kg de Carne'
    parCerveja.innerHTML = calcCerveja(num_adultos, num_horas) + ' Latas Cerveja'
    parRefri.innerHTML = calcRefri(num_adultos, num_criancas, num_horas) + ' Garrafas de 2L'

})


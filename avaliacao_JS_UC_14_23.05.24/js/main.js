const formularioFila = document.querySelector("form")
const comprimentoFilaSpan = document.querySelector("span")
const pacienteAtualSpan = document.querySelector("h3")

let atendimento = []

formularioFila.addEventListener("submit", function(e){
e.preventDefault()

const inPaciente = document.getElementById("inPaciente").value
const endPaciente = document.getElementById("endPaciente").value
const inCpf = document.getElementById("inCpf").value
const triagem = document.getElementById("triagem").value
const plano = document.getElementById("plano").value

const paciente ={
    inPaciente:inPaciente,
    endPaciente:endPaciente,
    inCpf:inCpf,
    triagem:triagem,
    plano:plano
}

atendimento.push(paciente)
atualizarComprimentoFila()
formularioFila.reset()
})

formularioFila.btAtender.addEventListener("click", () =>{
    if (atendimento.length === 0){
        alert("Não tem pacientes para atender")
        return
    }

    let indProximoPaciente = 0

    for(let ind = 0; ind <atendimento.length; ind++){
        if(atendimento[ind].triagm == "vermelho" && atendimento[ind].plano == "particular"){
            indProximoPaciente = ind
            break
        }else if(atendimento[ind].triagem == "vermelho" && atendimento[ind].plano !== "particular"){
            indProximoPaciente = ind
            break
        }else if(atendimento[ind].triagem == "amarelo" && atendimento[ind].plano == "particular"){
            indProximoPaciente = ind
            break
        }else if(atendimento[ind].triagem == "amarelo" && atendimento[ind].plano !== "particular"){
            indProximoPaciente = ind
            break
        }else if(atendimento[ind].triagem == "verde" && atendimento[ind].plano == "particular"){
            indProximoPaciente = ind
            break
        }else if(atendimento[ind].triagem == "verde" && atendimento[ind].plano !== "particular"){
            indProximoPaciente = ind
            break
        }
    }

    const pacienteProximo = atendimento.splice(indProximoPaciente,1)[0]
    const pacienteInformacao = `${pacienteProximo.inPaciente}  (triagm: ${pacienteProximo.triagem}) (plano ${pacienteProximo.plano})`

    pacienteAtualSpan.textContent = pacienteInformacao
    atualizarComprimentoFila()
})

function atualizarComprimentoFila(){
    comprimentoFilaSpan.textContent = atendimento.length
}
    
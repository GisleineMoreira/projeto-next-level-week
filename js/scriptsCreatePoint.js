


function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res =>  res.json() )
    .then( states => {

        for( const state of states) {
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`            
        }

        
    } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value
    
    const indexOfSelectadState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectadState].text

     const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTM = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true


    fetch(url)
    .then( res =>  res.json() )
    .then( cities => {    

        for( const city of cities) {
            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
            
        }

        citySelect.disabled = false     
    } )

}


document
     .querySelector("select[name=uf]")
     .addEventListener("change", getCities)

//itens de coleta:
//pegar todos os li´s

const itensToCollect = document.querySelectorAll(".itens-grid li")

for(const iten of itensToCollect ){
    iten.addEventListener("click", handleSelectedIten)
}

const collectedItens = document.querySelector("input[name=itens]")
let selectedItens =[]

function handleSelectedIten(event){
    const itenLi = event.target
    //adcionar ou remover uma classe com javascript
    itenLi.classList.toggle("selected")


    const itenId = itenLi.dataset.id
    

    //verificar se existem itens selecionados, se sim
    //pegar os itens selecionados

    const alreadySelected = selectedItens.findIndex( iten =>{
        const itenFound = iten == itenId //isso será true ou false
        return itenFound 
    })

    //se já estiver selecionado, 

    if( alreadySelected >= 0 ) {
        //tirar da seleção
        const filteredItens = selectedItens.filter(iten => {
          const itensIsDiferent = iten != itenId //false
            return itensIsDiferent
        })

         selectedItens = filteredItens

    } else {
        //se não estiver selecionado
        //adcionar a seleçao
        selectedItens.push(itenId)
    }    

    //se não estiver selecionado, adcionar  à seleção
    // atualizar o campo escondido com os itens 
    
    collectedItens.value = selectedItens
}
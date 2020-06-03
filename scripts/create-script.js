
function populateUFs () {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then (res => res.json())
    .then (states =>{
        ufselect.innerHTML= `<option value="1">valor</option>`
    })
   

populateUFs()


document
   .querySelector("select[name=uf]")
    addEventListener("change", ()=>{
             console.log("mudei") 
            }

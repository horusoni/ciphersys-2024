let found = document.querySelector('.found')
document.addEventListener('click',(e)=>{
    let modClasse = e.target.classList[0]

    if(modClasse === 'nameMod'){
        found.placeholder = "BUSCAR POR NOME COMPLETO"
        found.id = 'nome'
        found.value =''
        
        addClassButton('nomeSrc','cpfSrc','cepSrc','placaSrc')
    }
    if(modClasse === 'cpfMod'){
        found.placeholder = "BUSCAR POR CPF"
        found.id = 'cpf'
        found.value =''
        
        addClassButton('cpfSrc','nomeSrc','cepSrc','placaSrc')
    }
    if(modClasse === 'cepMod'){
        found.placeholder = "BUSCAR POR CEP"
        found.id = 'cep'
        found.value =''
        
        addClassButton('cepSrc','nomeSrc','cpfSrc','placaSrc')
    }
    if(modClasse === 'placaMod'){
        found.placeholder = "PLACA DE VEÍCULO"
        found.id = 'placa'
        found.value =''
        
        addClassButton('placaSrc','cpfSrc','nomeSrc','cepSrc')
    }

    //aqui posso fazer uma função para melhorar a legibilidade do meu código

})


function 
addClassButton(add,remove1,remove2,remove3){
    searchBtn.classList.remove(remove1)
    searchBtn.classList.remove(remove2)
    searchBtn.classList.remove(remove3)
    searchBtn.classList.add(add)
}
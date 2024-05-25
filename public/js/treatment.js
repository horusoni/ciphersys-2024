found.addEventListener('keypress',(e)=>{

 
    if(found.id === 'cpf' && found.value.length === 11){
        e.preventDefault()
    }
    if(found.id === 'placa' && found.value.length === 7 ){
        e.preventDefault()
    }
})
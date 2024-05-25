document.addEventListener('click',(e)=>{
    let classModSearch = e.target.classList[2]
    let endpoint = ''

    if(classModSearch === 'nomeSrc'){
        endpoint = '/nome'
        enviarDados(endpoint,'nome',)
    }
    if(classModSearch === 'cpfSrc'){
       endpoint = '/cpf'
        enviarDados(endpoint,'cpf')

    }
    if(classModSearch === 'cepSrc'){
        endpoint = '/cep'
        enviarDados(endpoint,'cep')
    }
    if(classModSearch === 'placaSrc'){
        endpoint = '/placa'
        enviarDados(endpoint,'placa')
   
    }
})

searchBtn.addEventListener('click',()=>{
    document.getElementById('res').innerHTML = 'BUSCANDO...';
})

async function enviarDados(endpoint,valor) {
    const dado = document.getElementById(valor).value; // Obtém o valor do campo de entrada nome

    // Envia uma requisição POST para o backend
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dado }) // Envia os dados do formulário no formato JSON
    });

    // Verifica se a requisição foi bem-sucedida
    if (response.ok) {
        // Converte a resposta em JSON
        const data = await response.json();
        console.log(data)
        
        let format = ''
        
        if(data.rota === 'nome' && data.nomeDB.length > 0){
            for(let i = 0 ; i< data.nomeDB.length;i++){
                format += `<p>CPF: ${data.nomeDB[i].cpf}</p> 
                <p>NOME: ${data.nomeDB[i].nome}</p>
                <p>SEXO: ${data.nomeDB[i].sexo}F</p>
                <p>NASCIMENTO: ${data.nomeDB[i].nascimento}</p> <br>`
                }
        }else if(data.rota === 'cpf' && data.cpfDB.length > 0 ){
            for(let i = 0 ; i< data.cpfDB.length;i++){
                format += `
                <p>CPF: ${data.cpfDB[i].cpf}</p>
                <p>PAI: ${data.cpfDB[i].pai}</p>
                <p>MAE: ${data.cpfDB[i].mae}</p>
                <p>MUNICIPIO NASCIMENTO: ${data.cpfDB[i].municipioNascimento}</p>
                <p>MUNICIPIO: ${data.cpfDB[i].municipio}</p>
                <p>LOGRADOURO: ${data.cpfDB[i].logradouro}</p>
                <p>NUMERO: ${data.cpfDB[i].numero}</p>
                <p>BAIRRO: ${data.cpfDB[i].bairro}</p>
                <p>CEP: ${data.cpfDB[i].cep}</p>
                <p>RG ${data.cpfDB[i].rgNumero}</p>
                <p>RG ORGAO EMISOR: ${data.cpfDB[i].rgOrgaoEmisor}</p>
                <p>RG UF: ${data.cpfDB[i].rgUf}</p>
                <p>RG DATA EMISSAO:${data.cpfDB[i].rgDataEmissao}</p>
                <p>CNS: ${data.cpfDB[i].cns}</p>
                <p>TELEFONE: ${data.cpfDB[i].telefone}</p>
                <p>TELEFONE SECUNDARIO: ${data.cpfDB[i].telefoneSecundario}</p> <br>
                
                `
            
            }
        }else if(data.rota === 'placa' && data.placaDB.length > 0){
            for(let i = 0 ; i< data.placaDB.length;i++){
                format += `
                <p>ID: ${data.placaDB[i].id}</p>
                <p>DATA_ATUALIACAO: ${data.placaDB[i].data_atualiacao}</p>
                <p>CHASSI: ${data.placaDB[i].chassi}</p>
                <p>PLACA: ${data.placaDB[i].placa}</p>
                <p>FATURADO: ${data.placaDB[i].faturado}</p>
                <p>ANO_FABRICACAO: ${data.placaDB[i].ano_fabricacao}</p>
                <p>MUNICIPIO: ${data.placaDB[i].municipio}</p>
                <p>UF_PLACA: ${data.placaDB[i].uf_placa}</p>
                <p>MARCA_MODELO: ${data.placaDB[i].marca_modelo}</p>
                <p>COMBUSTIVEL: ${data.placaDB[i].combustivel}</p>
                <p>POTENCIA: ${data.placaDB[i].potencia}</p>
                <p>CAPACIDADE_CARGA: ${data.placaDB[i].capacidade_carga}</p>
                <p>NACIONALIDADE: ${data.placaDB[i].nacionalidade}</p>
                <p>LINHA: ${data.placaDB[i].linha}</p>
                <p>CARROCERIA: ${data.placaDB[i].carroceria}</p>
                <p>CAIXA_CAMBIO: ${data.placaDB[i].caixa_cambio}</p>
                <p>EIXO_TRASEIRO_DIF: ${data.placaDB[i].eixo_traseiro_dif}</p>
                <p>TERCEIRO_EIXO: ${data.placaDB[i].terceiro_eixo}</p>
                <p>MOTOR: ${data.placaDB[i].motor}</p>
                <p>TIPO_DOC_FATURADO: ${data.placaDB[i].tipo_doc_faturado}</p>
                <p>UF_FATURADO: ${data.placaDB[i].uf_faturado}</p>
                <p>TIPO_DOC_PROP: ${data.placaDB[i].tipo_doc_prop}</p>
                <p>ANO_MODELO: ${data.placaDB[i].ano_modelo}</p>
                <p>TIPO_VEICULO: ${data.placaDB[i].tipo_veiculo}</p>
                <p>ESPECIE_VEICULO: ${data.placaDB[i].especie_veiculo}</p>
                <p>TIPO_CARROCERIA: ${data.placaDB[i].tipo_carroceria}</p>
                <p>COR_VEICULO: ${data.placaDB[i].cor_veiculo}</p>
                <p>QUANTIDADE_PASSAGEIRO: ${data.placaDB[i]. quantidade_passageiro}</p>
                <p>SITUACAO_CHASSI: ${data.placaDB[i].situacao_chassi}</p>
                <p>EIXOS: ${data.placaDB[i].eixos}</p>
                <p>TIPO_MONTAGEM: ${data.placaDB[i]. tipo_montagem}</p>
                <p>TIPO_DOC_IMPORTADORA: ${data.placaDB[i].tipo_doc_importadora}</p>
                <p>IDENT_IMPORTADORA: ${data.placaDB[i].ident_importadora}</p>
                <p>DI: ${data.placaDB[i].di}</p>
                <p>REGISTRO_DI: ${data.placaDB[i].registro_di}</p>
                <p>UNIDADE_LOCAL_SRF: ${data.placaDB[i].unidade_local_srf}</p>
                <p>ULTIMA_ATUALIZACAO: ${data.placaDB[i].ultima_atualizacao}</p>
                <p>RESTRICAO_1: ${data.placaDB[i].restricao_1}</p>
                <p>RESTRICAO_2: ${data.placaDB[i].restricao_2}</p>
                <p>RESTRICAO_3: ${data.placaDB[i].restricao_3}</p>
                <p>RESTRICAO_4: ${data.placaDB[i].restricao_4}</p>
                <p>LIMITE_RESTRICAO_TRIB: ${data.placaDB[i].limite_restricao_trib}</p>
                <p>CILINDRADAS: ${data.placaDB[i].cilindradas}</p>
                <p>CAP_MAXIMA_TRACAO: ${data.placaDB[i].cap_maxima_tracao}</p>
                <p>PESO_BRUTO_TOTAL: ${data.placaDB[i].peso_bruto_total}</p>
                <p>SITUACAO_VEICULO: ${data.placaDB[i].situacao_veiculo}</p>
                <p>PLACA_MODELO_ANTIGO: ${data.placaDB[i].placa_modelo_antigo}</p>
                <p>PLACA_MODELO_NOVO: ${data.placaDB[i]. placa_modelo_novo}</p>
                <p>PLACA_NOVA: ${data.placaDB[i].placa_nova}</p>
                        `
            }
        }else if(data.rota === 'cep' && data.cepDB.length > 0){
            for(let i = 0 ; i< data.cepDB.length;i++){
                format += `
                <p>CPF: ${data.cepDB[i].cpf}</p>
                <p>PAI: ${data.cepDB[i].pai}</p>
                <p>MAE: ${data.cepDB[i].mae}</p>
                <p>MUNICIPIO NASCIMENTO: ${data.cepDB[i].municipioNascimento}</p>
                <p>MUNICIPIO: ${data.cepDB[i].municipio}</p>
                <p>LOGRADOURO: ${data.cepDB[i].logradouro}</p>
                <p>NUMERO: ${data.cepDB[i].numero}</p>
                <p>BAIRRO: ${data.cepDB[i].bairro}</p>
                <p>CEP: ${data.cepDB[i].cep}</p>
                <p>RG ${data.cepDB[i].rgNumero}</p>
                <p>RG ORGAO EMISOR: ${data.cepDB[i].rgOrgaoEmisor}</p>
                <p>RG UF: ${data.cepDB[i].rgUf}</p>
                <p>RG DATA EMISSAO:${data.cepDB[i].rgDataEmissao}</p>
                <p>CNS: ${data.cepDB[i].cns}</p>
                <p>TELEFONE: ${data.cepDB[i].telefone}</p>
                <p>TELEFONE SECUNDARIO: ${data.cepDB[i].telefoneSecundario}</p> <br>     
                `
            }

        }else{
        format = '<p>Registro não localizado em nosso banco de dados.</p>'
    
        }
        
        // Atualiza a página com os dados recebidos do backend
        // Por exemplo, você pode exibir os dados em uma div com id "resultado"
    
        document.getElementById('res').innerHTML = format;
    } else {
        // Se houver um erro na requisição, exibe uma mensagem de erro
        console.error('Erro ao enviar dados:', response.statusText);
    }
}

//'cepSrc','nomeSrc','cpfSrc','placaSrc'
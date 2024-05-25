import {selectUser,selectNome,selectCpf,selectPlaca,selectCep} from './controller/usersControl.js'


import express from "express"
import session from 'express-session'

const app = express()
const port = 8080

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());

app.use(session({
    secret: 'professoraninja', // Chave secreta usada para assinar o cookie de sessão
    resave: false, // Evitar ressalvamento de sessão se nada mudar
    saveUninitialized: false // Evitar a criação de sessões não inicializadas
}));

let danied = ''

app.get('/', (req,res)=>{
   let  danied = ``
    console.log(req.session.userID)
    res.render('index',{danied})

  
})  

app.get('/painel',(req,res)=>{
    if(req.session.userID){
        res.redirect('/painel')
    }else{
        res.redirect('/')
    }
})

app.post('/painel',async (req,res)=>{
    let usernameF = req.body.user
    let passwordF = req.body.pass
    let users = await selectUser()
    let verificar = false

    danied = `
    <div id="daniedCont">
<div class="danied daniedOpen">
  <p id="closeAlert">X</p>
    <h1>ACESSO NEGADO</h1>
</div>
</div>`

    for(let i = 0;i <users.length;i++){
        if( users[i].username == usernameF && users[i].senha === passwordF){
            verificar = true
            req.session.userID = users[i].id
            break   
        }
    }
    if(verificar){
  
        res.render('painel')
    }else{
        res.render('index',{danied})
    }
  
})

//consulta de dados---------

app.post('/nome',async (req,res)=>{
    let nomeRec = req.body.dado
    let nomeDB = await selectNome(nomeRec)
    res.json({'rota':'nome',nomeDB});

})

app.post('/cpf',async (req,res)=>{
    let nomeRec = req.body.dado
    let cpfDB = await selectCpf(nomeRec)

    res.json({'rota':'cpf',cpfDB});

    console.log(cpfDB)

})
app.post('/cep',async (req,res)=>{
    let nomeRec = req.body.dado
    let cepDB = await selectCep(nomeRec)
    console.log(cepDB)
    console.log(req.body)

    res.json({'rota':'cep',cepDB});

})
app.post('/placa',async (req,res)=>{

    let nomeRec = req.body.dado
    let placaDB = await selectPlaca(nomeRec)
    
    console.log(nomeRec)
    console.log(placaDB)
    res.json({'rota':'placa',placaDB});

    console.log(req.body)

})

app.listen(port,()=>{
    console.log('LOCALHOST: http://192.168.1.6:'+port)
    console.log('TUNNEL: redbackx-42676.portmap.host:42676')
    console.log('DNS: ')
})
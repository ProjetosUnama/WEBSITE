import express from 'express'
const app = express()

//INDICAR PARA O EXPRESS LER BODY COM JSON
app.use(express.json())

//mock
const selecoes = [
    {id: 1, nome: 'Marcos', matricula: '01', curso: 'ADS'},
    {id: 2, nome: 'Antonio', matricula: '02', curso: 'ADS'},
    {id: 3, nome: 'Gleydson', matricula: '03', curso: 'ADS'},
    {id: 4, nome: 'Erica', matricula: '04', curso: 'ADS'},
    {id: 5, nome: 'João', matricula: '05', curso: 'ADS'},
    {id: 6, nome: 'Marcelo', matricula: '06', curso: 'ADS'},
]

//retornar o objeto por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

//pegar a posicao ou index do elemento no array por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

//CRIAR ROTA PADRÃO OU RAIZ
app.get('/', (req, res) => {
    res.send('Olá João e Antonio!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    //let index = req.params.id
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Aluno Cadastrado com Sucesso!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com id ${req.params.id} Excluida com Sucesso!`)
})

app.put('/selecoes/:id', (req, res) =>{
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.send(`Seleção com id ${req.params.id} atualizada com sucesso!`)
})

export default app


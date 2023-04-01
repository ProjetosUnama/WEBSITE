import app from './src/app.js'
import conexao from './bancodados/conecao.js'

const PORT = 3000

// fazer a conexão 
conexao.connect((erro) => {
    if(erro) {
        console.log('erro')
    } else {
        console.log("Conexão realizada com sucesso!")

        // ESCUTAR A PORTA A PORTA 3000
        app.listen(PORT, () => {
         console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
        })
    }
})

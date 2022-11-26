const http = require('http'); //importando a lib http do node
const produto = require('./produto');
const welcome = require('./welcome');

const host = 'localhost';
const porta = '8000';


function recepcao(req, res) {
    const rota = req.url.split('?')[0];
    
    console.log({ rota })
    const rotas = {
        '/produto/adicionar': produto.add,
        '/produto/listar': produto.list,
        '/produto/detalhar': produto.show,
        '/welcome': welcome.show
    }

    if (rotas[rota] === undefined) {
        return res.end('Erro 404');
    }
  
    //indo buscar a função atribuida a url/rota e executando ela
    let resultado = rotas[rota];
        
    resultado(res, req);  
}

http.createServer(recepcao).listen(porta, host);
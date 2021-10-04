$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CadastrarDadosPessoais.feature");
formatter.feature({
  "name": "Cadastrar dados",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CadastrarDadosPessoais"
    }
  ]
});
formatter.scenario({
  "name": "Cadastrar conta",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CadastrarDadosPessoais"
    },
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o primeiro nome \"Pedro\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarOPrimeiroNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o ultimo nome \"Servio\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarOUltimoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o endereco \"Q Conj St\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarOEndereco(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a cidade \"Brasilia\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarACidade(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o estado",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euAcionarOEstado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o zip-postal \"00000\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarOZipPostal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero de telefone \"99999999\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarONumeroDeTelefone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar um endereco alternativo \"Q Conj St N\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarUmEnderecoAlternativo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao para registrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.acionarOBotaoParaRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.oSistemaExibeOUsuarioLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar conta falha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CadastrarDadosPessoais"
    },
    {
      "name": "@cadastroFalha"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o primeiro nome \"Pedro\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarOPrimeiroNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o ultimo nome \"Servio\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarOUltimoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o endereco \"Q Conj St\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarOEndereco(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a cidade \"Brasilia\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarACidade(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o estado",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euAcionarOEstado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o zip-postal \"00000\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarOZipPostal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero de telefone \"99999999\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarONumeroDeTelefone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nao informar um endereco alternativo",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.naoInformarUmEnderecoAlternativo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao para registrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.acionarOBotaoParaRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o erro no cadastro",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.oSistemaExibeOErroNoCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/ComprarCamisa.feature");
formatter.feature({
  "name": "Comprar camisa",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@ComprarCamisa"
    }
  ]
});
formatter.scenario({
  "name": "adicionar camisa ao carrinho",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@ComprarCamisa"
    },
    {
      "name": "@comprarCamisa"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar na aba T-shirt",
  "keyword": "Quando "
});
formatter.match({
  "location": "ComprarCamisaSteps.euClicarNaAbaTShirt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao adicionar ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoAdicionarAoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao proceder ao checkout1",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoProcederAoCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao proceder ao checkout2",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoProcederAoCheckout2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao proceder ao checkout3",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoProcederAoCheckout3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aceitar os termos de servico",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.aceitarOsTermosDeServico()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao proceder ao checkout4",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoProcederAoCheckout4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao pagar com cheque",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoPagarComCheque()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao de confirmar pedido",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoDeConfirmarPedido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema realiza o pedido",
  "keyword": "Entao "
});
formatter.match({
  "location": "ComprarCamisaSteps.oSistemaRealizaOPedido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "adicionar camisa ao carrinho",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@ComprarCamisa"
    },
    {
      "name": "@comprarCamisaFalha"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar na aba T-shirt",
  "keyword": "Quando "
});
formatter.match({
  "location": "ComprarCamisaSteps.euClicarNaAbaTShirt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao adicionar ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoAdicionarAoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao proceder ao checkout1",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoProcederAoCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao proceder ao checkout2",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoProcederAoCheckout2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao proceder ao checkout3",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoProcederAoCheckout3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nao aceitar os termos de servico",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.naoAceitarOsTermosDeServico()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao proceder ao checkout4",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarCamisaSteps.clicarNoBotaoProcederAoCheckout4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe falha no procedimento",
  "keyword": "Entao "
});
formatter.match({
  "location": "ComprarCamisaSteps.oSistemaExibeFalhaNoProcedimento()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CriarConta.feature");
formatter.feature({
  "name": "Criar conta",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CriarConta"
    }
  ]
});
formatter.scenario({
  "name": "Criar conta",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CriarConta"
    },
    {
      "name": "@criarConta"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar a aba Sign in",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarContaSteps.euAcionarAAbaSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo email adress \"pedromelo2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informarNoCampoEmailAdress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Create an account",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.acionarOBotaoCreateAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema ira para tela de cadastro de dados",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarContaSteps.oSistemaIraParaTelaDeCadastroDeDados()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "email ja registrado",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CriarConta"
    },
    {
      "name": "@criarContaFalha"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar a aba Sign in",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarContaSteps.euAcionarAAbaSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo email adress \"pedroservio2011@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informarNoCampoEmailAdress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Create an account",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.acionarOBotaoCreateAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de email ja registrado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarContaSteps.oSistemaExibeAMensagemDeEmailJaRegistrado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Realizar login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o email \"pedroservio2011@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Sign in",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario faz login",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oUsuarioFazLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Falha ao realizar login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginFalha"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o email \"pedroservio2020@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarDadosPessoaisSteps.euInformarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Sign in",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe falha na autenticacao",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeFalhaNaAutenticacao()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
});
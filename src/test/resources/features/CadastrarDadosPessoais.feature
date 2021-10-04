#language: pt
#enconding: UTF-8

@CadastrarDadosPessoais
Funcionalidade: Cadastrar dados

	@cadastro
	Cenario: Cadastrar conta
	Quando eu informar o primeiro nome "Pedro"
	E informar o ultimo nome "Servio"
	E informar a senha "12345678"
	E informar o endereco "Q Conj St"
	E informar a cidade "Brasilia"
	E acionar o estado
	E informar o zip-postal "00000"
	E informar o numero de telefone "99999999"
	E informar um endereco alternativo "Q Conj St N"
	E acionar o botao para registrar
	Entao o sistema exibe o usuario logado
	
	@cadastroFalha
	Cenario: Cadastrar conta falha
	Quando eu informar o primeiro nome "Pedro"
	E informar o ultimo nome "Servio"
	E informar a senha "12345678"
	E informar o endereco "Q Conj St"
	E informar a cidade "Brasilia"
	E acionar o estado
	E informar o zip-postal "00000"
	E informar o numero de telefone "99999999"
	E nao informar um endereco alternativo
	E acionar o botao para registrar
	Entao o sistema exibe o erro no cadastro
	
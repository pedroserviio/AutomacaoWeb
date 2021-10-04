#language: pt
#enconding: UTF-8

@CriarConta
Funcionalidade: Criar conta

	@criarConta
	Cenario: Criar conta
		Quando eu acionar a aba Sign in
		E informar no campo email adress "pedromelo2@gmail.com"
		E acionar o botao Create an account
		Entao o sistema ira para tela de cadastro de dados
		
	@criarContaFalha
	Cenario: email ja registrado
		Quando eu acionar a aba Sign in
		E informar no campo email adress "pedroservio2011@gmail.com"
		E acionar o botao Create an account
		Entao o sistema exibe a mensagem de email ja registrado
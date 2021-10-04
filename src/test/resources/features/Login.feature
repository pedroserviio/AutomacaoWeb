#language: pt
#enconding: UTF-8

@login
Funcionalidade: Login

	@loginSucesso
	Cenario: Realizar login
		Quando eu informar o email "pedroservio2011@gmail.com"
		E informar a senha "12345678"
		E clicar no botao Sign in
		Entao o usuario faz login
		
	@loginFalha	
	Cenario: Falha ao realizar login
		Quando eu informar o email "pedroservio2020@gmail.com"
		E informar a senha "12345678"
		E clicar no botao Sign in
		Entao o sistema exibe falha na autenticacao

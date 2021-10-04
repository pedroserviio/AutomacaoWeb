#language: pt
#enconding: UTF-8

@ComprarCamisa
Funcionalidade: Comprar camisa

		@comprarCamisa
		Cenario: adicionar camisa ao carrinho
		Quando eu clicar na aba T-shirt
		E clicar no botao adicionar ao carrinho
		E clicar no botao proceder ao checkout1
		E clicar no botao proceder ao checkout2
		E clicar no botao proceder ao checkout3
		E aceitar os termos de servico
		E clicar no botao proceder ao checkout4
		E clicar no botao pagar com cheque
		E clicar no botao de confirmar pedido
		Entao o sistema realiza o pedido
		
		@comprarCamisaFalha
		Cenario: adicionar camisa ao carrinho
		Quando eu clicar na aba T-shirt
		E clicar no botao adicionar ao carrinho
		E clicar no botao proceder ao checkout1
		E clicar no botao proceder ao checkout2
		E clicar no botao proceder ao checkout3
		E nao aceitar os termos de servico
		E clicar no botao proceder ao checkout4
		Entao o sistema exibe falha no procedimento
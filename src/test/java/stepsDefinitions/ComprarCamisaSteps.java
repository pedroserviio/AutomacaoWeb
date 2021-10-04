package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.AdressPage;
import pageObjects.PaymentPage;
import pageObjects.ShippingPage;
import pageObjects.SummaryPage;
import pageObjects.TelaDeComprasPage;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class ComprarCamisaSteps {

	// Comprar camisa
	@Quando("eu clicar na aba T-shirt")
	public void euClicarNaAbaTShirt() throws Throwable {
		Thread.sleep(2000);
		Na(TelaDeComprasPage.class).clicarNaAbaTShirts();
	}

	@Quando("clicar no botao adicionar ao carrinho")
	public void clicarNoBotaoAdicionarAoCarrinho() {
	   Na(TelaDeComprasPage.class).acessarProduto();
	}

	@Quando("clicar no botao proceder ao checkout1")
	public void clicarNoBotaoProcederAoCheckout() throws Throwable {
	    Thread.sleep(2000);
		Na(TelaDeComprasPage.class).clicarNoBotaoDeProceder();
	}
	
	@Quando("clicar no botao proceder ao checkout2")
	public void clicarNoBotaoProcederAoCheckout2() throws Throwable {
	    Thread.sleep(2000);
		Na(SummaryPage.class).clicarNoBotaoDeProceder();
	}
	
	@Quando("clicar no botao proceder ao checkout3")
	public void clicarNoBotaoProcederAoCheckout3() throws Throwable {
	    Thread.sleep(3000);
		Na(AdressPage.class).clicarNoBotaoDeProceder();
	}

	@Quando("aceitar os termos de servico")
	public void aceitarOsTermosDeServico() {
		Na(ShippingPage.class).aceitarTermosDeServico();
	}
	
	@Quando("clicar no botao proceder ao checkout4")
	public void clicarNoBotaoProcederAoCheckout4() throws Throwable {
	    Na(ShippingPage.class).clicarNoBotaoDeProceder();
	}

	@Quando("clicar no botao pagar com cheque")
	public void clicarNoBotaoPagarComCheque() {
		Na(PaymentPage.class).pagarComCheque();
	}

	@Quando("clicar no botao de confirmar pedido")
	public void clicarNoBotaoDeConfirmarPedido() {
	    Na(PaymentPage.class).confirmarPedido();
	}

	@Entao("o sistema realiza o pedido")
	public void oSistemaRealizaOPedido() throws Throwable {
		Thread.sleep(2000);
	    assertTrue(driver.findElement(By.xpath("//p[@class='alert alert-success']")).isDisplayed());
	}
	
	// Comprar camisa falha
	@Quando("nao aceitar os termos de servico")
	public void naoAceitarOsTermosDeServico() {
		Na(ShippingPage.class).naoAceitarTermosDeServico();
	}

	@Entao("o sistema exibe falha no procedimento")
	public void oSistemaExibeFalhaNoProcedimento() throws Throwable {
	   Thread.sleep(2000);
	   assertTrue(driver.findElement(By.xpath("//p[text()='You must agree to the terms of service before continuing.']")).isDisplayed());
	}


}

package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CriarContaPage;
import pageObjects.TelaInicialPage;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class CriarContaSteps {

	// Criar conta
	@Quando("eu acionar a aba Sign in")
	public void euAcionarAAbaSignIn() {
		Na(TelaInicialPage.class).acionarBotaoSignIn();
	}

	@Quando("informar no campo email adress {string}")
	public void informarNoCampoEmailAdress(String email) {
	   Na(CriarContaPage.class).informarCampoEmail(email);
	}

	@Quando("acionar o botao Create an account")
	public void acionarOBotaoCreateAnAccount() throws Throwable {
	    Na(CriarContaPage.class).acionarBotaoCreate();
	}

	@Entao("o sistema ira para tela de cadastro de dados")
	public void oSistemaIraParaTelaDeCadastroDeDados() throws Throwable {
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//h1[text()='Create an account']")).isDisplayed());
	}
	
	// Criar conta falha
	@Entao("o sistema exibe a mensagem de email ja registrado")
	public void oSistemaExibeAMensagemDeEmailJaRegistrado() throws Throwable {
		Thread.sleep(7000);
		assertTrue(driver.findElement(By.xpath("//div[@id='create_account_error']")).isDisplayed());
	}

}

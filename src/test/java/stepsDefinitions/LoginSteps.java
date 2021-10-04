package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class LoginSteps {

	// Fazer Login
	@Quando("eu informar o email \"([^\"]*)\"$")
	public void euInformarOEmail(String email) throws Throwable {
		Thread.sleep(2000);
		Na(LoginPage.class).informarCampoEmail(email);
	}

	@Quando("a senha \"([^\"]*)\"$")
	public void informarASenha(String senha) {
		Na(LoginPage.class).informarCampoSenha(senha);
	}

	@Quando("clicar no botao Sign in")
	public void clicarNoBotaoSignIn() {
		Na(LoginPage.class).acionarBotaoLogin();
	}

	@Entao("o usuario faz login")
	public void oUsuarioFazLogin() throws Throwable {
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//h1[text()='My account']")).isDisplayed());
	}

	// Fazer Login falha
	@Entao("o sistema exibe falha na autenticacao")
	public void oSistemaExibeFalhaNaAutenticacao() throws Throwable {
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//p[text()='There is 1 error']")).isDisplayed());
	}

}

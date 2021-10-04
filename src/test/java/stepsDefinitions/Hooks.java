package stepsDefinitions;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import pageObjects.CriarContaPage;
import pageObjects.LoginPage;
import pageObjects.TelaInicialPage;

import static utils.Utils.*;

public class Hooks {

	@Before(value = "not @CadastrarDadosPessoais")
	public void setUp() {
		acessarSistema();
		Na(TelaInicialPage.class).acionarBotaoSignIn();
	}
	
	@Before(value = "@ComprarCamisa")
	public void comprarProduto() {
		Na(LoginPage.class).informarCampoEmail("pedroservio2011@gmail.com");
		Na(LoginPage.class).informarCampoSenha("12345678");
		Na(LoginPage.class).acionarBotaoLogin();
	}

	// Necessario mudar os emails do cadastro a cada teste
	@Before(value = "@cadastro")
	public void funcionalidadeCriarConta() {
		acessarSistema();
		Na(TelaInicialPage.class).acionarBotaoSignIn();
		Na(CriarContaPage.class).informarCampoEmail("pedromelo1@gmail.com");
		Na(CriarContaPage.class).acionarBotaoCreate();
	}
	
	@Before(value = "@cadastroFalha")
	public void funcionalidadeCriarContaFalha() {
		acessarSistema();
		Na(TelaInicialPage.class).acionarBotaoSignIn();
		Na(CriarContaPage.class).informarCampoEmail("pedrosilva1@gmail.com");
		Na(CriarContaPage.class).acionarBotaoCreate();
	}

	@After()
	public void tearDown(Scenario scenario) {
		capturarTela(scenario);
	}

}

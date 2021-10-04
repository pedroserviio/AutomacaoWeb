package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CadastrarDadosPessoaisPage;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class CadastrarDadosPessoaisSteps {

	// Cadastro
	@Quando("eu informar o primeiro nome {string}") 
	public void euInformarOPrimeiroNome(String primeiroNome) throws Throwable {
		Thread.sleep(5000);
		Na(CadastrarDadosPessoaisPage.class).informarPrimeiroNome(primeiroNome);
	}
	
	@Quando("informar o ultimo nome {string}") 
	public void euInformarOUltimoNome(String ultimoNome) {
		Na(CadastrarDadosPessoaisPage.class).informarUltimoNome(ultimoNome);
	}
	
	@Quando("informar a senha {string}") 
	public void euInformarASenha(String senha) {
		Na(CadastrarDadosPessoaisPage.class).informarSenha(senha);
	}
	
	@Quando("informar o endereco {string}") 
	public void euInformarOEndereco(String endereco) {
		Na(CadastrarDadosPessoaisPage.class).informarEndereco(endereco);
	}
	
	@Quando("informar a cidade {string}") 
	public void euInformarACidade(String cidade) {
		Na(CadastrarDadosPessoaisPage.class).informarCidade(cidade);
	}
	
	@Quando("acionar o estado") 
	public void euAcionarOEstado() {
		Na(CadastrarDadosPessoaisPage.class).acionarEstado();
	}
	
	@Quando("informar o zip-postal {string}") 
	public void euInformarOZipPostal(String zipPostal) {
		Na(CadastrarDadosPessoaisPage.class).informarPostcode(zipPostal);
	}
	
	@Quando("informar o numero de telefone {string}") 
	public void euInformarONumeroDeTelefone(String telefone) {
		Na(CadastrarDadosPessoaisPage.class).informarTelefone(telefone);
	}
	
	@Quando("informar um endereco alternativo {string}") 
	public void euInformarUmEnderecoAlternativo(String enderecoAlternativo) {
		Na(CadastrarDadosPessoaisPage.class).informarEnderecoAlternativo(enderecoAlternativo);
	}
	
	@Quando("acionar o botao para registrar")
	public void acionarOBotaoParaRegistrar() throws Throwable {
		Na(CadastrarDadosPessoaisPage.class).acionarBotaoRegistrar();
	}
	

	@Entao("o sistema exibe o usuario logado")
	public void oSistemaExibeOUsuarioLogado() throws Throwable {
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//h1[text()='My account']")).isDisplayed());
	}
	
	// Cadastro falha
	@Quando("nao informar um endereco alternativo")
	public void naoInformarUmEnderecoAlternativo() {
		Na(CadastrarDadosPessoaisPage.class).naoInformarEnderecoAlternativo();
	}

	@Entao("o sistema exibe o erro no cadastro")
	public void oSistemaExibeOErroNoCadastro() throws Throwable {
	    Thread.sleep(2000);
	    assertTrue(driver.findElement(By.xpath("//p[contains(text(), 'error')]")).isDisplayed());
	}
	
}

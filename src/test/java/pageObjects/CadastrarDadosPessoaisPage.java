package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class CadastrarDadosPessoaisPage {

	@FindBy(name = "customer_firstname")
	WebElement campoFirstName;
	
	@FindBy(name = "customer_lastname")
	WebElement campoLastName;
	
	@FindBy(name = "passwd")
	WebElement campoSenha;
	
	@FindBy(name = "address1")
	WebElement campoEndereco1;
	
	@FindBy(name = "city")
	WebElement campoCidade;
	
	@FindBy(name = "id_state")
	WebElement abaEstado;
	
	@FindBy(name = "postcode")
	WebElement campoPostcode;
	
	@FindBy(name = "phone_mobile")
	WebElement campoTelefone;
	
	@FindBy(name = "alias")
	WebElement campoAlias;
	
	@FindBy(name = "submitAccount")
	WebElement btnRegistrar;
	
	public void informarPrimeiroNome(String primeiroNome) {
		campoFirstName.sendKeys(primeiroNome);
	}
	
	public void informarUltimoNome(String ultimoNome) {
		campoLastName.sendKeys(ultimoNome);
	}
	
	public void informarSenha(String password) {
		campoSenha.sendKeys(password);
	}
	
	public void informarEndereco(String endereco) {
		campoEndereco1.sendKeys(endereco);
	}
	
	public void informarCidade(String cidade) {
		campoCidade.sendKeys(cidade);
	}
	
	public void acionarEstado() {
		Select selectEstado = new Select(abaEstado);
		selectEstado.selectByValue("5");
	}
	
	public void informarPostcode(String postcode) {
		campoPostcode.sendKeys(postcode);
	}
	
	public void informarTelefone(String telefone) {
		campoTelefone.sendKeys(telefone);
	}
	
	public void informarEnderecoAlternativo(String enderecoAlternativo) {
		campoAlias.clear();
		campoAlias.sendKeys(enderecoAlternativo);
	}
	
	public void acionarBotaoRegistrar() throws Throwable {
		Thread.sleep(2000);
		btnRegistrar.click();
	}
	
	public void naoInformarEnderecoAlternativo() {
		campoAlias.clear();
	}
	
}

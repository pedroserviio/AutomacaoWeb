package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CriarContaPage {

	@FindBy(id = "email_create")
	WebElement campoEmail;
	
	@FindBy(name = "SubmitCreate")
	WebElement btnCreate;
	
	public void informarCampoEmail(String email) {
		campoEmail.sendKeys(email);
	}
	
	public void acionarBotaoCreate() {
		btnCreate.click();
	}
	
}

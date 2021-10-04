package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {
	
	@FindBy(name = "email")
	WebElement campoEmail;
	
	@FindBy(name = "passwd")
	WebElement campoSenha;
	
	@FindBy(name = "SubmitLogin")
	WebElement btnLogin;
	
	public void informarCampoEmail(String email) {
		campoEmail.sendKeys(email);
	}
	
	public void informarCampoSenha(String senha) {
		campoSenha.sendKeys(senha);
	}
	
	public void acionarBotaoLogin() {
		btnLogin.click();
	}
	
}

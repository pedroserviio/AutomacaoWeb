package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaInicialPage {

	@FindBy(xpath = "//a[@title='Log in to your customer account']")
	WebElement btnSignIn;
	
	public void acionarBotaoSignIn() {
		btnSignIn.click();
	}
}

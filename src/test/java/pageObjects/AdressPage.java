package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AdressPage {
	
	@FindBy(name = "processAddress")
	WebElement btnProceder;
	
	public void clicarNoBotaoDeProceder() {
		btnProceder.click();
	}
}

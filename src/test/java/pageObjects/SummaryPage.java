package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SummaryPage {
	
	@FindBy(xpath = "//a//span[text()='Proceed to checkout']")
	WebElement btnProceder;
	
	public void clicarNoBotaoDeProceder() {
		btnProceder.click();
	}
}

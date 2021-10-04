package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ShippingPage {

	@FindBy(name = "cgv")
	WebElement termosDeServico;
	
	@FindBy(name = "processCarrier")
	WebElement btnProceder;
	
	public void aceitarTermosDeServico() {
		termosDeServico.click();
	}
	
	public void naoAceitarTermosDeServico() {
		termosDeServico.isSelected();
	}
	
	public void clicarNoBotaoDeProceder() {
		btnProceder.click();
	}
}

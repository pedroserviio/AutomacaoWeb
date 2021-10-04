package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PaymentPage {
	
	@FindBy(xpath = "//a[@title='Pay by check.']")
	WebElement pagarComCheque;
	
	@FindBy(xpath = "//*[@id=\"cart_navigation\"]/button")
	WebElement btnConfirmarCompra;
	
	public void pagarComCheque() {
		pagarComCheque.click();
	}
	
	public void confirmarPedido() {
		btnConfirmarCompra.click();
	}
}

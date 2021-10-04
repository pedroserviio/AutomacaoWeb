package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

import static utils.Utils.*;

public class TelaDeComprasPage {

	Actions actions = new Actions(driver);

	@FindBy(xpath = "//a[@title='Women']")
	WebElement abaTshirts;

	@FindBy(xpath = "//a[@title='Faded Short Sleeve T-shirts']")
	WebElement produto;

	@FindBy(xpath = "//a[@title='Add to cart']")
	WebElement btnAddNoCarrinho;

	@FindBy(css = "div#layer_cart a > span")
	WebElement btnProceder;

	public void clicarNaAbaTShirts() {
		actions.moveToElement(abaTshirts).click().build().perform();
	}

	public void acessarProduto() {
		actions.moveToElement(produto).build().perform();
		btnAddNoCarrinho.click();
	}

	public void clicarNoBotaoDeProceder() {
		btnProceder.click();
	}

}

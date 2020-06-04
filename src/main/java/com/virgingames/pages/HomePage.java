package com.virgingames.pages;

import com.cucumber.listener.Reporter;
import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    // loginlink webelement for navigate to login page
    @FindBy (xpath = "//a[contains(text(),'Login')]")
    WebElement loginLink;





    //  method for clicking on login link
    public void clickOnLoginLink()  {

        Reporter.addStepLog("Clicking on login link : " + loginLink.toString() + "<br>");
        log.info("Clicking on login link " +loginLink.toString());
        clickOnElement(loginLink);


    }

}

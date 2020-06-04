package com.virgingames.pages;

import com.cucumber.listener.Reporter;
import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    // creating emailfield webelement for sending text
    @FindBy(xpath = "//input[@placeholder='Username or Email']")
    WebElement emailField;

    // creating password webelement for sending text
    @FindBy (xpath = "//input[@placeholder='Password']")
    WebElement passwordField;

    // creating loginbtn webelement to click
    @FindBy (xpath = "//body/div/div/div/div/div/main/div/div/div/form/fieldset/ol/li/button[1]")
    WebElement loginBtn;

    // errormessage webelement for getting error text
    @FindBy (xpath = "//div[contains(text(),'Please try again, your username')]")
    WebElement errorMessage;

    // both credential errormessage webelement for getting error text
    @FindBy (xpath = "//div[contains(text(),'Both your username and password are required')]")
    WebElement errorMessageForBothCredential;


    // method for entering email into email field
    public void enterEmailId(String email) {
        Reporter.addStepLog("Entering email address : " + email +" "+ " to email field : " + emailField.toString() + "<br>");
        sendTextToElement(emailField, email);
        log.info("Entering email address "+ email +" "+ "to email field : " + emailField.toString());
    }

    // method for entering password into password field
    public void enterPassword(String password) {
        Reporter.addStepLog("Entering password : " + password +" "+ " to password field : " + passwordField.toString() + "<br>");
        sendTextToElement(passwordField, password);
        log.info("Entering password : "+ password +" "+ " to password field :" + passwordField.toString());
    }

    // method for clicking on login button
    public void clickOnLoginButton() {
        Reporter.addStepLog("Clicking on login button : " + loginBtn.toString() + "<br>");
        clickOnElement(loginBtn);
        log.info("Clicking on login Button"+loginBtn.toString());
    }

    // method for getting error message
    public String getErrorMessage() {
        Reporter.addStepLog("Getting error message  from : " + errorMessage.toString());
        log.info("Getting error message : " + errorMessage.toString());
        return getTextFromElement(errorMessage);

    }

    // method for getting error message for both credential
    public String getErrorMessageForBothCredential() {
        Reporter.addStepLog("Getting error message  from : " + errorMessageForBothCredential.toString());
        log.info("Getting error message : " + errorMessageForBothCredential.toString());
        return getTextFromElement(errorMessageForBothCredential);

    }




}

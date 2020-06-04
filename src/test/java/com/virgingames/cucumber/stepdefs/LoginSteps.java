package com.virgingames.cucumber.stepdefs;

import com.virgingames.pages.HomePage;
import com.virgingames.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import static com.virgingames.utility.Utility.getRandomString;


public class LoginSteps {

    String email = "Rocky" + getRandomString(5) + "@gmail.com"; // using random method for generating email
    String password = "Rocky" + getRandomString(3); // using random method for generation password

    @Given("^I am on login page$")
    public void iAmOnLoginPage() {
    }


    @When("^I enter invalid email id into email field\"$")
    public void iEnterInvalidEmailIdIntoEmailField() {
        new LoginPage().enterEmailId(email);


    }

    @And("^I enter invalid password into password field\"$")
    public void iEnterInvalidPasswordIntoPasswordField() {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage) {
        Assert.assertEquals(new LoginPage().getErrorMessage(), errorMessage);

    }

    @And("^I leave password field blank$")
    public void iLeavePasswordFieldBlank() {
    }

    @Then("^I should see the error message for both credential required \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessageForBothCredentialRequired(String errorMessage) {
        Assert.assertEquals(new LoginPage().getErrorMessageForBothCredential(), errorMessage);
    }


    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page$")
    public void iShouldNavigateToLoginPage() {
    }
}

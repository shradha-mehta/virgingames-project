$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/virgingames/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "As a user I want to login into virgin games website",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 15462218200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that user should navigate to login page",
  "description": "",
  "id": "login-functionality;verify-that-user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 131711400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2868563900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPage()"
});
formatter.result({
  "duration": 52200,
  "status": "passed"
});
formatter.after({
  "duration": 802945800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid email id into email field\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password into password field\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "errorMessage"
      ],
      "line": 18,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 19,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6088619400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid email id into email field\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password into password field\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 76000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 42951422300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidEmailIdIntoEmailField()"
});
formatter.result({
  "duration": 524324300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidPasswordIntoPasswordField()"
});
formatter.result({
  "duration": 247082800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 161665800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 2250906800,
  "status": "passed"
});
formatter.after({
  "duration": 793134200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify the error message with empty credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-empty-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter invalid email id into email field\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I leave password field blank",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message for both credential required \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-empty-credentials;",
  "rows": [
    {
      "cells": [
        "errorMessage"
      ],
      "line": 29,
      "id": "login-functionality;verify-the-error-message-with-empty-credentials;;1"
    },
    {
      "cells": [
        "Both your username and password are required"
      ],
      "line": 30,
      "id": "login-functionality;verify-the-error-message-with-empty-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5916327400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the error message with empty credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-empty-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter invalid email id into email field\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I leave password field blank",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message for both credential required \"Both your username and password are required\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 62000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 210442802200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Login\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.61)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-C1H7GVRS\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\shrad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53776}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8ec463b81de58f9c43d80b2cbe631eaf\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Login\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.virgingames.utility.Utility.clickOnElement(Utility.java:42)\r\n\tat com.virgingames.pages.HomePage.clickOnLoginLink(HomePage.java:30)\r\n\tat com.virgingames.cucumber.stepdefs.LoginSteps.iClickOnLoginLink(LoginSteps.java:67)\r\n\tat ✽.When I click on login link(src/test/java/com/virgingames/resources/featurefile/login.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidEmailIdIntoEmailField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iLeavePasswordFieldBlank()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Both your username and password are required",
      "offset": 61
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessageForBothCredentialRequired(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1530159800,
  "status": "passed"
});
});
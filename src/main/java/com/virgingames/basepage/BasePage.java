package com.virgingames.basepage;

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;


public class BasePage {
    // declaring web driver
    public static WebDriver driver;

    public BasePage() {
        // initialize  web driver
        PageFactory.initElements(driver, this);

        // method to configure logs using log4j properties file
        PropertyConfigurator.configure(System.getProperty("user.dir") + "/src/test/java/com/virgingames/resources/propertiesfile/log4j.properties");

    }

}

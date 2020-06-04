package com.virgingames.browserselector;

import com.virgingames.basepage.BasePage;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.Reporter;


public class BrowserSelector extends BasePage {
    // logger for browserselector class
    private static final Logger log = LogManager.getLogger(BrowserSelector.class.getName());

    // declaring projectpath
    String projectPath = System.getProperty("user.dir");

    // browser select method for all 3 browser with if else condition
    public void selectBrowser(String browser) {
        if (browser.equalsIgnoreCase("chrome")) {
            // path for chrome driver
            System.setProperty("webdriver.chrome.driver", projectPath + "/driver/chromedriver.exe");
            Reporter.log("Launching Chrome Browser");
            log.info("Launching Chrome Browser");
            driver = new ChromeDriver();

        } else if (browser.equalsIgnoreCase("firefox")) {
            // path for firefox driver
            System.setProperty("webdriver.gecko.driver", projectPath + "/driver/geckodriver.exe");
            log.info("Launching Firefox Browser");
            driver = new FirefoxDriver();
        } else if (browser.equalsIgnoreCase("ie")) {
            // path for internet explore driver
            System.setProperty("webdriver.ie.driver", projectPath + "/driver/IEDriverServer.exe");
            log.info("Launching IE Browser");
            driver = new InternetExplorerDriver();

        } else {
            log.info("Wrong browser name");
            System.out.println("Wrong browser name");
        }
    }

}

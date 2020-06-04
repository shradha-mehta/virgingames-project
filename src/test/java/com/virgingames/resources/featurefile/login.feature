@Login
  Feature: Login functionality
    As a user I want to login into virgin games website

    Scenario: Verify that user should navigate to login page
      Given I am on home page
      When I click on login link
      Then I should navigate to login page

    Scenario Outline: Verify the error message with invalid credentials
      Given I am on home page
      When I click on login link
      And I enter invalid email id into email field"
      And I enter invalid password into password field"
      And I click on login button
      Then I should see the error message "<errorMessage>"
      Examples:
        | errorMessage                                                              |
        | Please try again, your username/email or password has not been recognised |

      Scenario Outline: Verify the error message with empty credentials
        Given I am on home page
        When I click on login link
        And I enter invalid email id into email field"
        And I leave password field blank
        And I click on login button
        Then I should see the error message for both credential required "<errorMessage>"
        Examples:
          | errorMessage                                 |
          | Both your username and password are required |


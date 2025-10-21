@regression @login
Feature: Login to Webdriveruniversity.com

    Scenario Outline: Valid and invalid login
        Given I navigate to Webdriveruniversity.com homepage
        When I click on the Login Portal button
        And I switch to a new browser tab
        And I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should see an alert box that contains text '<expectedAlterText>'

        Examples:
            | username  | password     | expectedAlterText    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Password123  | validation failed    |

        @smoke @ignore
        Examples:
            | username  | password     | expectedAlterText    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Password123  | validation failed    |
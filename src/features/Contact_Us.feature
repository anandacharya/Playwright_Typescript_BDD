@regression @contact-us
Feature: Webdriveruniversity.com Contact Us Page

Background: Pre conditions
    Given I navigate to Webdriveruniversity.com homepage
     When I click on the Contact Us button
     And I switch to a new browser tab

    Scenario: Valid Contact Us Form Submission
     And I enter a first name
     And I enter a last name
     And I enter a email address
    And I enter comments
     And I click on the submit button
     Then I should see a thank you message

    Scenario: Invalid Contact Us Form Submission
     And I enter a first name
     And I enter a last name
    And I enter a email address
     And I enter comments
     And I click on the submit button
     Then I should see unsuccessful submission message

    @smoke
    Scenario: Valid Contact Us Form Submission - using Specific Data
        And I enter a specific first name "John"
        And I enter a specific last name "Doe"
        And I enter a specific email address "john.doe@example.com"
        And I enter specific comments "Hello World" and a number 2 within the comments
        And I click on the submit button
        Then I should see a thank you message

    Scenario: Valid Contact Us Form Submission
        And I enter a random first name
        And I enter a random last name
        And I enter a random email address
        And I enter comments
        And I click on the submit button
        Then I should see a thank you message

    Scenario Outline: Valid Contact Us Page
        And I enter a first name <firstName> and a last name <lastName>
        And I enter a email address '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should see a thank you message '<message>'

        Examples:
            | firstName | lastName | emailAddress         | comment       | message                     |
            | John      | Doe      | john.doe@example.com | Hello World 2 | Thank You for your Message! |
            | Mia       | Wong     | mia.wong@example.com | Hello World 3 | Thank You for your Message! |
            | Granet    | Smith    | granet.smith         | Hello World 4 | Invalid email address       |
Feature: Webdriveruniversity.com Contact Us Page

#Scenario: Valid Contact Us Form Submission
#  Given I navigate to Webdriveruniversity.com homepage
#  When I click on the Contact Us button
#  When I switch to a new browser tab
#  And I enter a first name
#  And I enter a last name
#  And I enter a email address
# And I enter comments
#  And I click on the submit button
#  Then I should see a thank you message
  
#Scenario: Invalid Contact Us Form Submission
#  Given I navigate to Webdriveruniversity.com homepage
#  When I click on the Contact Us button
#  When I switch to a new browser tab
#  And I enter a first name
#  And I enter a last name
# And I enter a email address
#  And I enter comments
#  And I click on the submit button
#  Then I should see unsuccessful submission message


Scenario: Valid Contact Us Form Submission - using Specific Data
  Given I navigate to Webdriveruniversity.com homepage
  When I click on the Contact Us button
  When I switch to a new browser tab
  And I enter a specific first name "John"
  And I enter a specific last name "Doe"
  And I enter a specific email address "john.doe@example.com"   
  And I enter specific comments "Hello World" and a number 2 within the comments
  And I click on the submit button
  Then I should see a thank you message

  Scenario: Valid Contact Us Form Submission
  Given I navigate to Webdriveruniversity.com homepage
  When I click on the Contact Us button
  When I switch to a new browser tab
  And I enter a random first name
  And I enter a random last name
  And I enter a random email address
  And I enter comments
  And I click on the submit button
  Then I should see a thank you message
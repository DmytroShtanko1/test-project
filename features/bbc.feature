@bbc
Feature: BBC registration
  As a user
  I checked the registration option on the main page

  I should have the below features available:
  1) registration;
  2) login.
  3) check mail.

  @aut-1 @bbc.registration
  Scenario Outline: BBC registration
    Given have a temporary mail adress
    And go to the main page <site domain>
    When I click to Sign in
    And see BBC – Sign in form
    And click Register now link
    Then see BBC – Register form
    And I see 2 buttons with ages
    And choose more 13 age
    And see BBC – Register – enter your date of birth form
    And fill in it by random data
    And submit data
    And see BBC – Register – enter your details form
    And fill temp mail and pass from acc
    And refuse for subscribe to the news
    And submit data
    And see BBC – Register – thank you form
    And see message from BBC Account in TempMail

    Examples:
      | site domain        |
      | http://www.bbc.com |
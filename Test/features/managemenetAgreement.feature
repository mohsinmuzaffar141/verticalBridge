Feature: verify data against management agreement

  @managementData
  Scenario Outline: verify data against management agreement

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify managment agreement data "<relationships>"
    When  I log out

    Examples:
       | credentials  |  relationships |
       |   admin      |     relation   |



  @sortingOwnerName
  Scenario Outline: verify that owner name should be sorted in ascending order

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify owner name should be sorted in ascending order
    When  I log out

    Examples:
       | credentials  |  relationships |
       |   admin      |     relation   |



  @verifyRevenue
  Scenario Outline: verify revenue against management agreement

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify revenue "<relationships>"
    When  I log out

    Examples:
      | credentials  |  relationships |
      |   admin      |     relation   |


#  @verifyPortfolioList
#  Scenario Outline: verify portfolio list
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    When  I click to the select partner view button
#    When i click on relationship "<relationships>"
#    When  I log out
#
#    Examples:
#      | credentials  | relationships |
#      |   admin      |   relation    |


  @verifyFilterEnable
  Scenario Outline: verify filler should be enable

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  verify filter is enabled
    When  I log out


    Examples:
          | credentials  |  relationships |
          |   admin      |     relation   |



  @verifySites
  Scenario Outline: verify sites against portfolio

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify that sites should be displayed "<relationships>"
    When  I log out


    Examples:
           | credentials  |  relationships |
           |   admin      |     relation   |


  @searchSite
  Scenario Outline: verify search against management agreement

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  search the management agreement list "<searchFilter>"
    When  I log out


    Examples:
        | credentials  |  relationships | searchFilter |
        |   admin      |     relation   |filterSearch  |


#  @ascendingDescendingOrder
#  Scenario Outline: verify search against management agreement
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click on my sites button
#    Then  click on ascending and descending order tab "<order>"
#
#
#
#    Examples:
#      | credentials  |  order    |
#      |   admin      |  |

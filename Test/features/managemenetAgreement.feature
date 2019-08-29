Feature: verify data against management agreement

  @managementData
  Scenario Outline: verify data against management agreement

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
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
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify owner name should be sorted in ascending order "<relationships>"
    When  I log out

    Examples:
       | credentials  |  relationships |
       |   admin      |     relation   |



  @verifyRevenue
  Scenario Outline: verify revenue against management agreement

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify revenue "<relationships>"
    When  I log out

    Examples:
      | credentials  |  relationships |
      |   admin      |     relation   |


  @verifyPortfolioList
  Scenario Outline: verify portfolio list

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  I click on relationship "<relationships>"
    When  I log out

    Examples:
      | credentials  | relationships |
      |   admin      |   relation    |



  @verifyFilterEnable
  Scenario Outline: verify filler should be enable

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
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
    When  Click checkbox button
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
    When  Click checkbox button
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


  @ascendingDescendingOrder
  Scenario Outline: verify ascending and descending order of management agreement

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on ascending and descending order tab "<order>"
    When  I log out

    Examples:
      | credentials  |  order    |  relationships |
      |   admin      |  table    |   relation     |
      |   admin      |  table1   |   relation     |

  @verifyDownloadSiteToExcelFile
  Scenario Outline: verify the mysite file should be downloaded

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on export to excel button "<download>"
    Then  verify the file should be downloaded
    When  I log out

    Examples:
      | credentials  |      download      |  relationships |
      |   admin      |   downloadButton   |   relation     |

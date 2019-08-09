Feature: verify links are not present on site header

  #Maps Tabs
  @clickMapResetTab
  Scenario Outline: verify links are not present on site header

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify edit and site inspection icon are not present on site header
    When  I log out

    Examples:
      | credentials  |  relationships |  location   |     site       |
      |   admin      |     relation   |   mapSearch |   siteMapData  |
Feature: verify filter against my sites

  @clickMapResetTab
  Scenario Outline: verify data above map

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  search the lotaion on the map "<location>"
    Then  click on reset button "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |  location   |     site       |
      |   admin      |     relation   |   mapSearch |   siteMapData  |

  @clickAutoViewTab
  Scenario Outline: verify on and off the auto view tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  click on auto view button
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |
      |   admin      |     relation   |   siteMapData  |


  @verifyContactsLabel
  Scenario Outline: verify contact labels

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  click "<tab>" on site detail page
    Then  verify contact label are present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |    tab     |
      |   admin      |     relation   |   siteMapData  | contactTab |

  @verifyContactGroupData
  Scenario Outline: verify contact contact group should contain data

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  click "<tab>" on site detail page
    Then  verify contact data are present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |    tab     |
      |   admin      |     relation   |   siteMapData  | contactTab |
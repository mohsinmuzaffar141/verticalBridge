Feature: verify filter against my sites

  #Maps Tabs
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



    #Contacts Tab
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
  Scenario Outline: verify contact group should contain data

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


  @verifyNoRecordsFound
  Scenario Outline: verify contact data is not present

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  click "<tab>" on site detail page
    Then  verify contact data are not present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |    tab     |
      |   admin      |     relation   |   siteMapData  | contactTab |


  @verifyNoDuplicateData
  Scenario Outline: verify that data should not be duplicated

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify contact data should not be duplicated "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |     tab     |
      |   admin      |     contactData   |  contactTab |



#PropertyTab
  @verifyAttributesOnPropertyTab
  Scenario Outline: verify attributes on property site should be present

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify attributes should be present on property tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |       tab     |
      |   admin      |     contactData   |   propertyTab |


  @verifyDataUnderPropertyInformationAndFiberData
  Scenario Outline: verify data should be present under property Information

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data should be present under property information "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |     tab        |
      |   admin      |     contactData   |   propertyTab  |
      |   admin      |     contactData   |   propertyTab1 |


  @verifyDataUnderAllSitesofProperties
  Scenario Outline: verify data should be present under sites on property

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify property data are present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |       tab      |
      |   admin      |     contactData   |   propertyTab1 |


  @verifyDataIsNotPresent
  Scenario Outline: verify data should be present under sites on property

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify property data is not present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |     tab      |
      |   admin      |     contactData   | propertyTab  |
      |   admin      |     contactData   | propertyTab1 |

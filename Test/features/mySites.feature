Feature: verify filter against my sites

  @searchFilter
  Scenario Outline: verify searchFilters against my sites

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  filter the management agreement list "<searchFilter>"
    When  I log out


    Examples:
      | credentials  |  relationships | searchFilter |
      |   admin      |     relation   |filterSearch  |


  @verifyFilterPresent
  Scenario Outline: verify filler should be present

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  verify filter is provided in site list
    When  I log out

    Examples:
      | credentials  |relationships |
      |   admin      |   relation   |



  @verifySiteData
  Scenario Outline: verify site data should be present

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  verify site number should be present "<searchFilter>"
    Then  verify site name should be present "<name>"
   # Then  verify owner name id should be present "<name>"
    Then  verify address should be present "<address>"
    Then  verify city should be present "<city>"
    Then  verify state should be present "<state>"
    Then  verify zipCode should be present "<zipcode>"
    Then  verify country should be present "<country>"
    Then  verify status should be present "<status>"
    When  I log out

    Examples:
      | credentials  |relationships | searchFilter |  name  | address   | city   | state   | zipcode   | country   |  status  |
      |   admin      | relation     | filterSearch |siteName|siteAddress|siteCity|siteState|siteZipCode|siteCountry|siteStatus|


  @sortingSiteName
  Scenario Outline: verify that owner name should be sorted in ascending order

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify site name should be sorted in ascending order
    When  I log out

    Examples:
      | credentials  |  relationships |
      |   admin      |     relation   |


  @removeFilter
  Scenario Outline: verify Filters applied against my sites is removed

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  filter the management agreement list "<searchFilter>"
    Then  verify that filter applied is removed "<relationships>"
    When  I log out

    Examples:
      | credentials  |  relationships | searchFilter |
      |   admin      |     relation   |filterSearch  |



  @selectSiteLink
  Scenario Outline: verify go to site detailed page

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify site number on detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |   site   |
      |   admin      |     relation   | siteList |



  @verifySite
  Scenario Outline: verify searchFilters against my sites

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify site Name on detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |   site   |
      |   admin      |     relation   | siteList |


  @verifyHeaderDetailPage
  Scenario Outline: verify general and contacts on header detail page

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify general and contacts section on detailed page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |   site   |
      |   admin      |     relation   | siteList |

  @verifySiteDetailLabel
  Scenario Outline: verify site detail Labels

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify site detail labels "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site    |
      |   admin      |     relation   | siteDetail |


  @verifySiteGeneralDetail
  Scenario Outline: verify site detail Labels

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify site detail labels "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site          |
      |   admin      |     relation   | siteDetailMohsin |

  @verifySiteContacts
  Scenario Outline: verify site detail Labels

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify site contacts labels "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site      |
      |   admin      |     relation   | siteContacts |


  @verifySiteDetailNotPresent
  Scenario Outline: verify site detail Labels not present

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify site detail labels not present "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |          site              |
      |   admin      |     relation   |    siteDetailNotPresent    |
      |   admin      |     relation   | siteDetailNotPresentMohsin |


  @verifyTabs @regression
  Scenario Outline: verify Tabs on detail page

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify tabs on site detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site  |
      |   admin      |     relation   | siteTabs |

  @verifyMapPin
  Scenario Outline: verify map pin on map

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify map pin site detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site  |
      |   admin      |     relation   | siteTabs |

  @verifyMapData
  Scenario Outline: verify data above map

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify data above map on site detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site    |
      |   admin      |     relation   | siteMapData |


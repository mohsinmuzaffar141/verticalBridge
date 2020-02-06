Feature: verify filter against my sites
  @verifyTabs
  Scenario Outline: verify Tabs on detail page

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify tabs on site detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site  |     URL   |
      |   admin      |     relation   | siteTabs | UrlLink |

  @searchFilter
  Scenario Outline: verify searchFilters against my sites

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  filter the management agreement list "<searchFilter>"
    When  I log out


    Examples:
      | credentials  |  relationships | searchFilter |     URL   |
      |   admin      |     relation   |filterSearch  | UrlLink |


  @verifyFilterPresent
  Scenario Outline: verify filler should be present

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  verify filter is provided in site list
    When  I log out

    Examples:
      | credentials  |relationships |     URL   |
      |   admin      |   relation   | UrlLink |



  @verifySiteData
  Scenario Outline: verify site data should be present

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  verify site number should be present "<searchFilter>"
    Then  verify site name should be present "<name>"
    Then  verify address should be present "<address>"
    Then  verify city should be present "<city>"
    Then  verify state should be present "<state>"
    Then  verify zipCode should be present "<zipcode>"
    Then  verify country should be present "<country>"
    Then  verify status should be present "<status>"
    When  I log out

    Examples:
      | credentials  |relationships | searchFilter |  name  | address   | city   | state   | zipcode   | country   |  status  |     URL   |
      |   admin      | relation     | filterSearch |siteName|siteAddress|siteCity|siteState|siteZipCode|siteCountry|siteStatus| UrlLink |


  @sortingSiteName
  Scenario Outline: verify that owner name should be sorted in ascending order

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify site name should be sorted in ascending order
    When  I log out

    Examples:
      | credentials  |  relationships |     URL   |
      |   admin      |     relation   | UrlLink |


  @removeFilter
  Scenario Outline: verify Filters applied against my sites is removed

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  filter the management agreement list "<searchFilter>"
    Then  verify that filter applied is removed "<relationships>"
    When  I log out

    Examples:
      | credentials  |  relationships | searchFilter |     URL   |
      |   admin      |     relation   |filterSearch  | UrlLink |

  @selectSiteLink
  Scenario Outline: verify go to site detailed page

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify site number on detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |   site   |     URL   |
      |   admin      |     relation   | siteList | UrlLink |

  @verifySite
  Scenario Outline: verify site name on detail page

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify site Name on detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |   site   |     URL   |
      |   admin      |     relation   | siteList | UrlLink |


  @verifyHeaderDetailPage
  Scenario Outline: verify general and contacts on header detail page

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify general and contacts section on detailed page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |   site   |     URL   |
      |   admin      |     relation   | siteList | UrlLink |

  @verifySiteDetailLabel
  Scenario Outline: verify site detail Labels

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify site detail labels "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site    |     URL   |
      |   admin      |     relation   | siteDetail | UrlLink |


  @verifySiteGeneralDetail
  Scenario Outline: verify site detail Labels

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify site detail labels "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site          |     URL   |
      |   admin      |     relation   | siteDetailMohsin | UrlLink |

  @verifySiteContacts
  Scenario Outline: verify site detail Labels

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify site contacts labels "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site      |     URL   |
      |   admin      |     relation   | siteContacts | UrlLink |


  @verifySiteDetailNotPresent
  Scenario Outline: verify site detail Labels not present

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify site detail labels not present "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |          site              |     URL   |
      |   admin      |     relation   |    siteDetailNotPresent    | UrlLink |
      |   admin      |     relation   | siteDetailNotPresentMohsin | UrlLink |




  @verifyMapPin
  Scenario Outline: verify map pin on map

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify map pin site detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |    site  |     URL   |
      |   admin      |     relation   | siteTabs | UrlLink |

  @verifyMapData
  Scenario Outline: verify data above map

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify data above map on site detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site    |     URL   |
      |   admin      |     relation   | siteMapData | UrlLink |

  @verifyHomePageImage
  Scenario Outline: verify image on home page should be present

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify home page image on portal
    When  I log out

    Examples:
      | credentials  |relationships |     URL  |
      |   admin      |   relation   | UrlLink |

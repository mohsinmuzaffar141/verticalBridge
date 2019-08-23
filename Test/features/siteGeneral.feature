Feature: verify links are not present on site header

  @linksNotPresent
  Scenario Outline: verify links are not present on site header

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  verify edit and site inspection icon are not present on site header "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |        tab      |
      |   admin      |     relation   |   siteMapData  |  siteDetailPage |
      |   admin      |     relation   |   siteMapData  |    mapTabPage   |

  @linksNotPresentUnderPropertyTab
  Scenario Outline: verify links are not present on property Tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<site>"
    Then  click "<tab>" on site detail page
    Then  verify management agreement are not present on property tab "<link>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |       tab      |       link       |
      |   admin      |     relation   |   siteMapData  |   propertyTab  |    propertyTab1  |

  @verifyLinksOnHomePage
  Scenario Outline: verify links to linkedIn page and newsroom page

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify links to linkedIn page and newsroom page "<link>"
    When  I log out

    Examples:
      | credentials  |  relationships  |      link       |
      |   admin      |    leasesData   |   homePageLink  |

#  @verifyClickToCallFunction
#  Scenario Outline: verify click to call function under contact tab
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
##    When  I click to the select partner view button
##    When  selects the "<relationships>"
##    Then  click the select button
#    Then  click "<tab>" on home page
#    Then  verify click to call function under contact tab
#    When  I log out
#
#    Examples:
#      | credentials  |  relationships  |           tab          |
#      |   admin      |    leasesData   |   contactHomePageTab   |

  @verifyFooterOnHomePage
  Scenario Outline: verify footer on home page

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify footer on home page "<link>"
    When  I log out

    Examples:
      | credentials    |      link       |
      |   admin        |   homePageLink  |

  @verifyHelpTabOnHomePage
  Scenario Outline: verify help tab on home page

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify help tab on home page
    When  I log out

    Examples:
      | credentials    |
      |   admin        |

  @verifyMainMenuSearch #164&165
  Scenario Outline: verify search box on main menu

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify search box on main menu
    When  I log out

    Examples:
      | credentials    |
      |   admin        |

  @verifySearchBoxSuggestions #166&167&168&169
  Scenario Outline: verify search box will display suggestions to match the text

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify search box will display suggestions to match the text "<suggestion>"
    Then  verify site number on detail page "<site>"
    When  I log out

    Examples:
      | credentials    | suggestion |   site   |
      |   admin        |  siteName  | siteList |

  @verifyTableHeaderOfAdvanceSearch
  Scenario Outline: verify table header of advance search

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on advance search
    Then  verify table header of advance search "<site>"
    When  I log out

    Examples:
      | credentials    |     site    | relationships|
      |   admin        | headerLabel |  relation    |



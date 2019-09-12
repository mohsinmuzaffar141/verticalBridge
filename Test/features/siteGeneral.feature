Feature: verify links are not present on site header

  @linksNotPresent
  Scenario Outline: verify links are not present on site header

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
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
    When  Click checkbox button
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
    When  Click checkbox button
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
#    When  Click checkbox button
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
    When  Click checkbox button
    Then  verify footer on home page "<link>"
    When  I log out

    Examples:
      | credentials    |      link       |
      |   admin        |   homePageLink  |

  @verifyHelpTabOnHomePage
  Scenario Outline: verify help tab on home page

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    Then  verify help tab on home page
    When  I log out

    Examples:
      | credentials    |
      |   admin        |

  #164&165
  @verifyMainMenuSearch
  Scenario Outline: verify search box on main menu

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    Then  verify search box on main menu
    When  I log out

    Examples:
      | credentials    |
      |   admin        |

    #166&167&168&169
  @verifySearchBoxSuggestions
  Scenario Outline: verify search box will display suggestions to match the text

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify search box will display suggestions to match the text "<suggestion>"
    Then  verify site number on detail page "<relationships>"
    When  I log out

    Examples:
      | credentials    | suggestion     |  relationships |
      |   admin        |  headerLabel   |   contactData  |

  @verifyTableHeaderOfAdvanceSearch
  Scenario Outline: verify table header of advance search

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on advance search
    Then  verify table header of advance search "<site>"
    When  I log out

    Examples:
      | credentials    |     site    | relationships|
      |   admin        | headerLabel |  relation    |



  @verifyLabelOfAdvanceSearch
  Scenario Outline: verify labels of advance search

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on advance search
    Then  verify labels of advance search "<site>"
    When  I log out

    Examples:
      | credentials    |     site    | relationships|
      |   admin        | headerLabel |  relation    |

#  @verifyLabelOfAdvanceSearch
#  Scenario Outline: verify labels of advance search
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    When  Click checkbox button
#    When  I click to the select partner view button
#    When  selects the "<relationships>"
#    Then  click the select button
#    Then  click on advance search
#    Then  verify labels of advance search "<site>"
#    When  I log out
#
#    Examples:
#      | credentials    |     site    | relationships|
#      |   admin        | headerLabel |  relation    |

  #170&171
  @verifyAdvanceSearchRefinement
  Scenario Outline: verify advance search should have refinement option

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on advance search
    Then  verify advance search should have refinemenet criteria "<site>"
    When  I log out

    Examples:
      | credentials    |      site      | relationships|
      |   admin        | headerLabelNew |  relation    |

  @verifyRelationshipName
  Scenario Outline: verify relationship should be present on the top

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify relationship should be present on the top "<relationships>"
    When  I log out

    Examples:
      | credentials     | relationships|
      |   admin         |  relation    |
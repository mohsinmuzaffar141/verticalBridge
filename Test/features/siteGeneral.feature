Feature: verify links are not present on site header

  @linksNotPresent
  Scenario Outline: verify links are not present on site header

   Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  verify edit and site inspection icon are not present on site header "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |        tab      |     URL  |
      |   admin      |     relation   |   siteMapData  |  siteDetailPage | UrlLink |
      |   admin      |     relation   |   siteMapData  |    mapTabPage   | UrlLink |

  @linksNotPresentUnderPropertyTab
  Scenario Outline: verify links are not present on property Tab

   Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  click "<tab>" on site detail page
    Then  verify management agreement are not present on property tab "<link>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |       tab      |       link       |     URL    |
      |   admin      |     relation   |   siteMapData  |   propertyTab  |    propertyTab1  | UrlLink |

  @verifyLinksOnHomePage
  Scenario Outline: verify links to linkedIn page and newsroom page

   Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify links to linkedIn page and newsroom page "<link>"
    When  I log out

    Examples:
      | credentials  |  relationships  |      link       |     URL    |
      |   admin      |    leasesData   |   homePageLink  | UrlLink |

#  @verifyClickToCallFunction
#  Scenario Outline: verify click to call function under contact tab
#
#   Given I am on "<URL>" Page
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
#      | credentials  |  relationships  |           tab          |     URL    |
#      |   admin      |    leasesData   |   contactHomePageTab   | UrlLink |


  @verifyFooterOnHomePage
  Scenario Outline: verify footer on home page

   Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    Then  verify footer on home page "<link>"
    When  I log out

    Examples:
      | credentials    |      link       |     URL    |
      |   admin        |   homePageLink  | UrlLink |

  @verifyHelpTabOnHomePage
  Scenario Outline: verify help tab on home page

   Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    Then  verify help tab on home page
    When  I log out

    Examples:
      | credentials    |     URL    |
      |   admin        | UrlLink |

  #164&165
  @verifyMainMenuSearch
  Scenario Outline: verify search box on main menu

   Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    Then  verify search box on main menu
    When  I log out

    Examples:
      | credentials    |     URL    |
      |   admin        | UrlLink |

    #166&167&168&169
  @verifySearchBoxSuggestions
  Scenario Outline: verify search box will display suggestions to match the text

   Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify search box will display suggestions to match the text "<suggestion>"
    Then  verify site number on detail page "<relationships>"
    When  I log out

    Examples:
      | credentials    | suggestion     |  relationships |     URL    |
      |   admin        |  headerLabel   |   contactData  | UrlLink |

    #taking too long to appear
#  @verifyTableHeaderOfAdvanceSearch
#  Scenario Outline: verify table header of advance search
#
#   Given I am on "<URL>" Page
#    When  Login to vertical bridge with "<credentials>"
#    When  Click checkbox button
#    When  I click to the select partner view button
#    When  selects the "<relationships>"
#    Then  click the select button
#    Then  click on advance search
#    Then  verify table header of advance search "<site>"
#    When  I log out
#
#    Examples:
#      | credentials    |     site    | relationships|     URL    |
#      |   admin        | headerLabel |  relation    | UrlLink |

#Same Above
#  @verifyLabelOfAdvanceSearch
#  Scenario Outline: verify labels of advance search
#
#   Given I am on "<URL>" Page
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
#      | credentials    |     site    | relationships|     URL    |
#      |   admin        | headerLabel |  relation    | UrlLink |


  #170&171
  @verifyAdvanceSearchRefinement
  Scenario Outline: verify advance search should have refinement option

   Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on advance search
    Then  verify advance search should have refinement criteria "<site>"
    When  I log out

    Examples:
      | credentials    |      site      | relationships|     URL    |
      |   admin        | headerLabelNew |  relation    | UrlLink |

  @verifyRelationshipName
  Scenario Outline: verify relationship should be present on the top

   Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify relationship should be present on the top "<relationships>"
    When  I log out

    Examples:
      | credentials     | relationships|     URL    |
      |   admin         |  relation    | UrlLink |
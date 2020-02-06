Feature: verify test cases of different tabs

  #Maps Tabs
  @clickMapResetTab
  Scenario Outline: verify data above map

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  search the location on the map "<location>"
    Then  click on reset button "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |  location   |     site       |     URL  |
      |   admin      |     relation   |   mapSearch |   siteMapData  | UrlLink |

  @clickAutoViewTab
  Scenario Outline: verify on and off the auto view tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  click on auto view button
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |     URL    |
      |   admin      |     relation   |   siteMapData  | UrlLink |



    #Contacts Tab
  @verifyContactsLabel
  Scenario Outline: verify contact labels

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  click "<tab>" on site detail page
    Then  verify contact label are present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |    tab     |     URL    |
      |   admin      |     relation   |   siteMapData  | contactTab | UrlLink |

  @verifyContactGroupData
  Scenario Outline: verify contact group should contain data

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  click "<tab>" on site detail page
    Then  verify contact data are present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |    tab     |     URL    |
      |   admin      |     relation   |   siteMapData  | contactTab | UrlLink |


  @verifyNoRecordsFound
  Scenario Outline: verify contact data is not present

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<site>"
    Then  click "<tab>" on site detail page
    Then  verify contact data are not present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships |     site       |    tab     |     URL    |
      |   admin      |     relation   |   siteMapData  | contactTab | UrlLink |


  @verifyNoDuplicateData
  Scenario Outline: verify that data should not be duplicated

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify contact data should not be duplicated "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |     tab     |     URL    |
      |   admin      |     contactData   |  contactTab | UrlLink |


      #PropertyTab
  @verifyAttributesOnPropertyTab
  Scenario Outline: verify attributes on property site should be present

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify attributes should be present on property tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |       tab     |     URL    |
      |   admin      |     contactData   |   propertyTab | UrlLink |


  @verifyDataUnderPropertyInformationAndFiberData
  Scenario Outline: verify data should be present under property Information

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data should be present under property information "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |     tab        |     URL    |
      |   admin      |     contactData   |   propertyTab  | UrlLink |
      |   admin      |     contactData   |   propertyTab1 | UrlLink |


  @verifyDataUnderAllSiteOfProperties
  Scenario Outline: verify data should be present under sites on property

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify property data are present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |       tab      |     URL    |
      |   admin      |     contactData   |   propertyTab1 | UrlLink |


  @verifyDataIsNotPresent
  Scenario Outline: verify data should be present under sites on property

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify property data is not present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |     tab      |     URL    |
      |   admin      |     contactData   | propertyTab  | UrlLink |
      |   admin      |     contactData   | propertyTab1 | UrlLink |


    #Leases Tab
  @verifyLeasesTabAttribute
  Scenario Outline: verify leases tab attribute should be present

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify leases tab attribute should be present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |     tab      |     URL    |
      |   admin      |     contactData   |   leasesTab  | UrlLink |

  @verifyLeasesTabData
  Scenario Outline: verify data should be present on leases tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data present on leases tab "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships  |     tab      |     URL    |
      |   admin      |  contactData   |   leasesTab  | UrlLink |

  @verifyLeasesTabLabels
  Scenario Outline: verify labels should be present on leases tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify leases tab labels should be present on leases tab "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships  |     tab      |     URL    |
      |   admin      |  contactData   |   leasesTab  | UrlLink |

  @verifyDataUnderGroundRights
  Scenario Outline: verify data should be present under ground rights

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data should be present under ground rights "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships |     tab      |     URL    |
      |   admin      |  leasesData   |  leasesTab1  | UrlLink |

  @verifyDataNotPresent
  Scenario Outline: verify data should be not present

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify leases tab data is not present "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships |     tab      |     URL    |
      |   admin      |  leasesData   |  leasesTab1  | UrlLink |


    #Opreation Tab
  @verifyLabelsOnOperationTab
  Scenario Outline: verify labels on operational tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels on operational tab "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships |      tab       |     URL    |
      |   admin      |    relation   |  operationTab  | UrlLink |

  @verifyLabelsNotPresentOnOperationTab
  Scenario Outline: verify labels on operational tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels not present on operational tab "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships   |     tab         |     URL    |
      |   admin      |    relation     |  operationTab   | UrlLink |
      |   admin      |    leasesData   |  operationTab1  | UrlLink |
      |   admin      |    leasesData   |  operationTab2  | UrlLink |


  @verifyDataUnderOperationalDataAttribute
  Scenario Outline: verify data under operational attribute

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data under operational attribute "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |      tab       |     URL    |
      |   admin      |    leasesData   |  operationTab  | UrlLink |
      |   admin      |    leasesData   |  operationTab1 | UrlLink |
      |   admin      |    leasesData   |  operationTab2 | UrlLink |
      |   admin      |    leasesData   |  operationTab3 | UrlLink |
      |   admin      |    leasesData   |  operationTab4 | UrlLink |
      |   admin      |    leasesData   |  operationTab5 | UrlLink |
      |   admin      |    leasesData   |  operationTab6 | UrlLink |
      |   admin      |    leasesData   |  operationTab7 | UrlLink |
      |   admin      |    leasesData   |  operationTab8 | UrlLink |


  @verifyDataUnderSiteComments
  Scenario Outline: verify data under site comments

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data under site comments "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |      tab      |     URL    |
      |   admin      |    leasesData   |  operationTab | UrlLink |


    #FCC Tab
  @verifyLabelsUnderFCCTab
  Scenario Outline: verify labels under FCC tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels under FCC tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |  tab |     URL    |
      |   admin      |    leasesData   |  FCC | UrlLink |

  @verifyLabelsDataUnderFCCTab
  Scenario Outline: verify labels data under FCC tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels data under FCC tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |  tab  |     URL    |
      |   admin      |    leasesData   |  FCC  | UrlLink |
      |   admin      |    leasesData   |  FCC1 | UrlLink |
      |   admin      |    leasesData   |  FCC2 | UrlLink |
      |   admin      |    leasesData   |  FCC3 | UrlLink |

  @verifyHyperLinkAndDisplayMessage
  Scenario Outline: verify link and display message under FCC tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify display message under FCC tab "<tab>"
    Then  verify link under FCC tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |  tab   |     URL    |
      |   admin      |    leasesData   |  FCC   | UrlLink |

  @verifyDisplayMessage
  Scenario Outline: verify display message under FCC tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify display message under FCC tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |  tab    |     URL    |
      |   admin      |    leasesData   |  FCC1   | UrlLink |


    #Rad Centers Tab
  @verifyLabelUnderRadCenter
  Scenario Outline: verify label under rad center tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify label under rad center tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab      |     URL    |
      |   admin      |    leasesData   |  radCenter   | UrlLink |

  @verifyLabelDataUnderRadCenter
  Scenario Outline: verify label data under rad center tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify label data under rad center tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab       |     URL    |
      |   admin      |    leasesData   |  radCenter    | UrlLink |
      |   admin      |    leasesData   |  radCenter1   | UrlLink |
      |   admin      |    leasesData   |  radCenter2   | UrlLink |

  @verifyIndicatorUnderRadCenter
  Scenario Outline: verify indicator under rad center tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify indicator under rad center tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab       |     URL    |
      |   admin      |    leasesData   |  radCenter    | UrlLink |

  @verifyTableHeaderUnderRadCenter
  Scenario Outline: verify table header under rad center tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify table header under rad center tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab       |     URL    |
      |   admin      |    leasesData   |   radCenter   | UrlLink |


    #Leasing Activity Tab
  @verifyTableHeaderUnderLeasingActivity
  Scenario Outline: verify table header under leasing activity tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify table header under leasing activity tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |         tab         |     URL    |
      |   admin      |    leasesData   |   leasingActivity   | UrlLink |

  @verifyLabelNotPresentUnderLeasingActivity
  Scenario Outline: verify label not present under leasing activity tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify label not present under leasing activity tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |         tab         |     URL    |
      |   admin      |    leasesData   |   leasingActivity   | UrlLink |

  @verifyButtonNotPresent
  Scenario Outline: verify buttons are not present on the portal

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    When  I log out

    Examples:
      | credentials  |  relationships  |         tab          |     URL    |
      |   admin      |    leasesData   |   leasingActivity1   | UrlLink |
      |   admin      |    leasesData   |   leasingActivity2   | UrlLink |


    #Document Tab
  @verifyLabelsUnderDocumentTab
  Scenario Outline: verify labels are present under document tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels under document tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |       tab       |     URL    |
      |   admin      |    leasesData   |   documentTab   | UrlLink |

  @searchFilesUnderDocumentTab
  Scenario Outline: verify files are present under document tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify files under document tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |       tab       |     URL    |
      |   admin      |    leasesData   |   documentTab   | UrlLink |

  @clickFolderAndSubFolderUnderDocumentTab
  Scenario Outline: click folder and sub folder under document tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  click folder and sub folder under document tab
    When  I log out

    Examples:
      | credentials  |  relationships  |       tab       |     URL    |
      |   admin      |    leasesData   |   documentTab   | UrlLink |

    #108-119 && 121/122
    @verifyOptionsNotPresentUnderDocumentTab
  Scenario Outline: verify options are not present under document tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify options are not present under document tab
    When  I log out

    Examples:
      | credentials  |  relationships  |       tab       |     URL    |
      |   admin      |    leasesData   |   documentTab   | UrlLink |

  @verifyTabsUnderHomePage
  Scenario Outline: verify tabs under home page

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify tabs are present under home page "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab      |     URL    |
      |   admin      |    leasesData   |   homePage   | UrlLink |

  @verifyContentUnderAboutTab
  Scenario Outline: verify content under about tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify content under about tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab      |     URL    |
      |   admin      |    leasesData   |   homePage   | UrlLink |

  @verifySubTabsUnderServicesTab
  Scenario Outline: verify sub tabs under services tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click "<tab>" on home page
    Then  verify sub tabs under services tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |        tab      |     URL    |
      |   admin      |    leasesData   |   servicesTab   | UrlLink |

  @verifyContentUnderServicesTab
  Scenario Outline: verify content under services tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click "<tab>" on home page
    Then  verify content under services tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |       tab       |     URL    |
      |   admin      |    leasesData   |   servicesTab   | UrlLink |

  @verifyContentUnderServicesSubTab
  Scenario Outline: verify content under services sub tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click "<tab>" on home page
    Then  click sub tab "<subTab>" under services tab
    Then  verify content under services tab "<subTab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |       tab       |      subTab    |     URL    |
      |   admin      |    leasesData   |   servicesTab   |   servicesTab1 | UrlLink |
      |   admin      |    leasesData   |   servicesTab   |   servicesTab2 | UrlLink |

  @verifyContentUnderContactTab
  Scenario Outline: verify content under contact tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click "<tab>" on home page
    Then  verify content under contact tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |           tab          |     URL    |
      |   admin      |    leasesData   |   contactHomePageTab   | UrlLink |

  @verifyContentDataUnderContactTab
  Scenario Outline: verify content under contact tab

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click "<tab>" on home page
    Then  verify content data under contact tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |           tab           |     URL    |
      |   admin      |    leasesData   |   contactHomePageTab    | UrlLink |





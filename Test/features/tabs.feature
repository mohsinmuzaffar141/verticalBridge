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


    #Leases Tab
  @verifyLeasesTabAttribute
  Scenario Outline: verify leases tab attribute should be present

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify leases tab attribute should be present "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships    |     tab      |
      |   admin      |     contactData   |   leasesTab  |

  @verifyLeasesTabData
  Scenario Outline: verify data should be present on leases tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data present on leases tab "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships  |     tab      |
      |   admin      |  contactData   |   leasesTab  |

  @verifyLeasesTabLabels
  Scenario Outline: verify labels should be present on leases tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify leases tab labels sholud be present on leases tab "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships  |     tab      |
      |   admin      |  contactData   |   leasesTab  |

  @verifyDataUnderGroundRights
  Scenario Outline: verify data should be present under ground rights

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data should be present under ground rights "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships |     tab      |
      |   admin      |  leasesData   |  leasesTab1  |

  @verifyDataNotPresent
  Scenario Outline: verify data should be not present

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify leases tab data is not present "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships |     tab      |
      |   admin      |  leasesData   |  leasesTab1  |


    #Opreation Tab
  @verifyLabelsOnOperationTab
  Scenario Outline: verify labels on operational tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels on operational tab "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships |      tab       |
      |   admin      |    relation   |  operationTab  |

  @verifyLabelsNotPresentOnOperationTab
  Scenario Outline: verify labels on operational tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels not present on operational tab "<tab>"
    When  I log out

    Examples:
      | credentials  | relationships   |     tab         |
      |   admin      |    relation     |  operationTab   |
      |   admin      |    leasesData   |  operationTab1  |
      |   admin      |    leasesData   |  operationTab2  |


  @verifyDataUnderOperationalDataAttribute
  Scenario Outline: verify data under operational attribute

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data under operational attribute "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |      tab       |
      |   admin      |    leasesData   |  operationTab  |
      |   admin      |    leasesData   |  operationTab1 |
      |   admin      |    leasesData   |  operationTab2 |
      |   admin      |    leasesData   |  operationTab3 |
      |   admin      |    leasesData   |  operationTab4 |
      |   admin      |    leasesData   |  operationTab5 |
      |   admin      |    leasesData   |  operationTab6 |
      |   admin      |    leasesData   |  operationTab7 |
      |   admin      |    leasesData   |  operationTab8 |


  @verifyDataUnderSiteComments
  Scenario Outline: verify data under site comments

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify data under site comments "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |      tab      |
      |   admin      |    leasesData   |  operationTab |


    #FCC Tab
  @verifyLabelsUnderFCCTab
  Scenario Outline: verify labels under FCC tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels under FCC tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |  tab |
      |   admin      |    leasesData   |  FCC |

  @verifyLabelsDataUnderFCCTab
  Scenario Outline: verify labels data under FCC tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels data under FCC tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |  tab  |
      |   admin      |    leasesData   |  FCC  |
      |   admin      |    leasesData   |  FCC1 |
      |   admin      |    leasesData   |  FCC2 |
      |   admin      |    leasesData   |  FCC3 |

  @verifyHyperLinkAndDisplayMessage
  Scenario Outline: verify link and display message under FCC tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify display message under FCC tab "<tab>"
    Then  verify link under FCC tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |  tab   |
      |   admin      |    leasesData   |  FCC   |

  @verifyDisplayMessage
  Scenario Outline: verify display message under FCC tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify display message under FCC tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |  tab    |
      |   admin      |    leasesData   |  FCC1   |


    #Rad Centers Tab
  @verifyLabelUnderRadCenter
  Scenario Outline: verify label under rad center tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify label under rad center tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab      |
      |   admin      |    leasesData   |  radCenter   |

  @verifyLabelDataUnderRadCenter
  Scenario Outline: verify label data under rad center tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify label data under rad center tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab       |
      |   admin      |    leasesData   |  radCenter    |
      |   admin      |    leasesData   |  radCenter1   |
      |   admin      |    leasesData   |  radCenter2   |

  @verifyIndicatorUnderRadCenter
  Scenario Outline: verify indicator under rad center tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify indicator under rad center tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab       |
      |   admin      |    leasesData   |  radCenter    |

  @verifyTabelHeaderUnderRadCenter
  Scenario Outline: verify table header under rad center tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify table header under rad center tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |     tab       |
      |   admin      |    leasesData   |   radCenter   |


    #Leasing Activity Tab
  @verifyTabelHeaderUnderLeasingActivity
  Scenario Outline: verify table header under leasing activity tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify table header under leasing activity tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |         tab         |
      |   admin      |    leasesData   |   leasingActivity   |

  @verifyLabelNotPresentUnderLeasingActivity
  Scenario Outline: verify label not present under leasing activity tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify label not present under leasing activity tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |         tab         |
      |   admin      |    leasesData   |   leasingActivity   |

  @verifyButtonNotPresent
  Scenario Outline: verify label not present under leasing activity tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    When  I log out

    Examples:
      | credentials  |  relationships  |         tab          |
      |   admin      |    leasesData   |   leasingActivity1   |
      |   admin      |    leasesData   |   leasingActivity2   |


    #Document Tab
  @verifyLabelsUnderDocumentTab
  Scenario Outline: verify labels are present under document tab

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link  "<relationships>"
    Then  click "<tab>" on site detail page
    Then  verify labels under document tab "<tab>"
    When  I log out

    Examples:
      | credentials  |  relationships  |       tab       |
      |   admin      |    leasesData   |   documentTab   |

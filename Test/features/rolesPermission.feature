Feature: verify test cases of roles and permission

  @verifyHomePageToExternalUsers
  Scenario Outline: verify home page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify tabs are present under home page "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify tabs are present under home page "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify tabs are present under home page "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |      credentials     |      tab     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |     URL    |
      |    realEstateAdmin   |   homePage   |  rolesPermission |    realEstateUser     |       admin        | portfolioType | UrlLink |
#      | utilityPartnerAdmin  |   homePage   | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType | UrlLink |
#      |    jvPartnerAdmin   |   homePage   | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType | UrlLink |

  @verifyLinksOnHomePageToExternalUsers
  Scenario Outline: verify links on home page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify links to linkedIn page and newsroom page "<link>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify links to linkedIn page and newsroom page "<link>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify links to linkedIn page and newsroom page "<link>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |      credentials     |     link     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |     URL    |
      |    realEstateAdmin   | homePageLink |  rolesPermission |    realEstateUser     |       admin        | portfolioType | UrlLink |
#      | utilityPartnerAdmin  | homePageLink | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType | UrlLink |
#      |    jvPartnerAdmin   |  homePageLink | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType | UrlLink |



  @verifyMySiteAccessOnMainPageToExternalUsers
  Scenario Outline: verify my site access on main page for external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  verify my site access on main page for internal/external users
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify my site access on main page for internal/external users
    When  I log out


    Examples:
      |      credentials       |  credentialsInternal   |     URL    |
      |    realEstateAdmin     |     realEstateUser     | UrlLink |
#      |  utilityPartnerAdmin  |     utilityPartnerUser   | UrlLink |
#      |     jvPartnerAdmin    |       jvPartnerUser     | UrlLink |

  @verifyMySiteAccessOnMainPageToExternal/InternalUsers
  Scenario Outline: verify my site access on main page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  verify my site access on main page for internal/external users
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify my site access on main page for internal/external users
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify my site access on main page for internal/external users
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |     URL    |
      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType | UrlLink |
#      | utilityPartnerAdmin  | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType | UrlLink |
#      |    jvPartnerAdmin   | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType | UrlLink |

  @viewManagementAgreementListToExternalUsers
  Scenario Outline: view management agreement list for external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out


    Examples:
      |      credentials       |  credentialsInternal   |     URL    |
      |    realEstateAdmin     |     realEstateUser     | UrlLink |
#      |  utilityPartnerAdmin  |     utilityPartnerUser  | UrlLink |
#      |     jvPartnerAdmin    |       jvPartnerUser     | UrlLink |



  @viewManagementAgreementListToExternal/InternalUsers
  Scenario Outline: verify management agreement list on main page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |     URL    |
      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType | UrlLink |
#      | utilityPartnerAdmin  | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType | UrlLink |
#      |    jvPartnerAdmin   | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType | UrlLink |

  @viewSitesToExternalUsers
  Scenario Outline: view sites for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  verify management agreement list "<credentials>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify management agreement list "<credentials>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify management agreement list "<credentials>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |     URL    |
      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType | UrlLink |
#      | utilityPartnerAdmin  |  rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType | UrlLink |
#      |    jvPartnerAdmin   |   rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType | UrlLink |


  @viewMyDashboardPageToExternalUsers
  Scenario Outline: view management agreement list for external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out


    Examples:
      |      credentials       |  credentialsInternal   |  report |     URL    |
      |    realEstateAdmin     |     realEstateUser     | reports | UrlLink |
#      |  utilityPartnerAdmin  |     utilityPartnerUser   | reports | UrlLink |
#      |     jvPartnerAdmin    |       jvPartnerUser     |  reports | UrlLink |


  @viewAboutPageOnMainPageForExternalUsers
  Scenario Outline: view about page on main page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify content under about tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify content under about tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify content under about tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |    tab   |     URL    |
      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType | homePage | UrlLink |
#      | utilityPartnerAdmin  |  rolesPermission1 |  utilityPartnerUser  |       admin        | portfolioType | homePage | UrlLink |
#      |    jvPartnerAdmin   |   rolesPermission2 |     jvPartnerUser    |        admin       | portfolioType | homePage | UrlLink |

  @viewServicesPageOnMainPageForExternalUsers
  Scenario Outline: view services page on main page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click "<tab>" on home page
    Then  verify content under services tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click "<tab>" on home page
    Then  verify content under services tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click "<tab>" on home page
    Then  verify content under services tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |      tab    |     URL    |
      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType | servicesTab | UrlLink |
#      | utilityPartnerAdmin  |  rolesPermission1 |  utilityPartnerUser  |       admin        | portfolioType | servicesTab | UrlLink |
#      |    jvPartnerAdmin   |   rolesPermission2 |     jvPartnerUser    |        admin       | portfolioType | servicesTab | UrlLink |

  @viewContactPageOnMainPageForExternalUsers
  Scenario Outline: view contact page on main page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click "<tab>" on home page
    Then  verify content under contact tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click "<tab>" on home page
    Then  verify content under contact tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click "<tab>" on home page
    Then  verify content under contact tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |      credentials    |      roles      | credentialsInternal  | credentialsAdmin  |    portfolio  |          tab       |     URL    |
      |    realEstateAdmin  | rolesPermission |  realEstateUser     |      admin        | portfolioType  | contactHomePageTab | UrlLink |
#      | utilityPartnerAdmin | rolesPermission1 | utilityPartnerUser  |     admin        | portfolioType | contactHomePageTab | UrlLink |
#      |    jvPartnerAdmin  |  rolesPermission2 |   jvPartnerUser    |       admin       | portfolioType | contactHomePageTab | UrlLink |

  @verifyTabsOnHomePageForExternalAndInternalUsers
  Scenario Outline: verify tabs on home page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify tabs are present under home page "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify tabs are present under home page "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify tabs are present under home page "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |      credentials     |      tab     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |     URL    |
      |    realEstateAdmin   |   homePage   |  rolesPermission |    realEstateUser     |       admin        | portfolioType | UrlLink |
#      | utilityPartnerAdmin  |   homePage   | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType | UrlLink |
#      |    jvPartnerAdmin   |   homePage   | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType | UrlLink |

    #17&18&19
  @verifyRelationshipNotViewableToExternalUsers
  Scenario Outline: verify relationship should not be selectable for external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify relationship should not be viewable for external users "<external>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify relationship should not be viewable for external users "<external>"
    When  I log out


    Examples:
      |      credentials       |  credentialsInternal   |     external    |     URL    |
      |    realEstateAdmin     |     realEstateUser     |   externalUser  | UrlLink |
#      |  utilityPartnerAdmin  |     utilityPartnerUser  |   externalUser  | UrlLink |
#      |     jvPartnerAdmin    |       jvPartnerUser     |   externalUser  | UrlLink |


  @viewSiteDetailPageForExternalAndInternalUsers
  Scenario Outline: view site detail page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify general and contacts section on detailed page "<site>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify general and contacts section on detailed page "<site>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify general and contacts section on detailed page "<site>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |   siteLink     |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |  site  |     URL    |
      |  realEstateAdmin   |  detailPage   | rolesPermission |    realEstateUser     |     admin        | portfolioType |siteList| UrlLink |
#      |utilityPartnerAdmin |  detailPage   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |siteList| UrlLink |
#      |  jvPartnerAdmin   |   detailPage  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |siteList | UrlLink |

  @viewSiteHeaderOnDetailPageForExternalAndInternalUsers
  Scenario Outline: view site header on detail page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify site number on detail page "<siteLink>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify site number on detail page "<siteLink>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify site number on detail page "<siteLink>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |   siteLink     |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |     URL    |
      |  realEstateAdmin   |  detailPage   | rolesPermission |    realEstateUser     |     admin        | portfolioType | UrlLink |
#      |utilityPartnerAdmin |  detailPage   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType | UrlLink |
#      |  jvPartnerAdmin   |   detailPage  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | UrlLink |

  @viewTabsOnSiteDetailPageForExternalAndInternalUsers
  Scenario Outline: view tabs on detail page for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify tabs on site detail page "<site>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify tabs on site detail page "<site>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify tabs on site detail page "<site>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |   siteLink     |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |  site  |     URL    |
      |  realEstateAdmin   |  detailPage   | rolesPermission |    realEstateUser     |     admin        | portfolioType |siteTabs| UrlLink |
#      |utilityPartnerAdmin |  detailPage   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |siteTabs| UrlLink |
#      |  jvPartnerAdmin   |   detailPage  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | siteTabs| UrlLink |

  @viewFCCLinkOnFCCTabForExternalAndInternalUsers
  Scenario Outline: view fcc link on fcc tab for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify link under FCC tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify link under FCC tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify link under FCC tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |   tab   |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |  siteLink  |     URL    |
      |  realEstateAdmin   |  FCC   | rolesPermission |    realEstateUser     |     admin        | portfolioType | detailPage | UrlLink |
#      |utilityPartnerAdmin |  FCC   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType | detailPage| UrlLink |
#      |  jvPartnerAdmin   |   FCC  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | detailPage | UrlLink |


  @verifyDevelopmentTabNotViewableToExternalUsers
  Scenario Outline: verify development tab should not be viewable for external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click "<tab>" on site detail page
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click "<tab>" on site detail page
    When  I log out


    Examples:
      |      credentials       |  credentialsInternal   |          tab        |     URL    |
      |    realEstateAdmin     |     realEstateUser     |   leasingActivity3  | UrlLink |
#      |  utilityPartnerAdmin  |     utilityPartnerUser  |   leasingActivity3  | UrlLink |
#      |     jvPartnerAdmin    |       jvPartnerUser     |   leasingActivity3  | UrlLink |

  @verifyOptionsNotPresentUnderDocumentTabForExternalAndInternalUsers
  Scenario Outline: verify options not present under document tab for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify options are not present under document tab
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify options are not present under document tab
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify options are not present under document tab
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |       tab      |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |  siteLink  |     URL    |
      |  realEstateAdmin   |  documentTab   | rolesPermission |    realEstateUser     |     admin        | portfolioType | detailPage | UrlLink |
#      |utilityPartnerAdmin |  documentTab   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType | detailPage| UrlLink |
#      |  jvPartnerAdmin   |   documentTab  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | detailPage | UrlLink |

  @verifySearchDocumentUnderDocumentTabForExternalAndInternalUsers
  Scenario Outline: verify search document under document tab for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify files under document tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify files under document tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify files under document tab "<tab>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |       tab       |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |   siteLink  |     URL    |
      |  realEstateAdmin   |  documentTab1   | rolesPermission |    realEstateUser     |     admin        | portfolioType | detailPage1 | UrlLink |
#      |utilityPartnerAdmin |  documentTab1   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType | detailPage1| UrlLink |
#      |  jvPartnerAdmin   |   documentTab1  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | detailPage1 | UrlLink |

    #20&22
  @verifySearchForExternalAndInternalUsers
  Scenario Outline: verify simple search for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify search box on main menu
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify search box on main menu
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify search box on main menu
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType | UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType | UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | UrlLink |

  @verifySimpleSearchForExternalAndInternalUsers
  Scenario Outline: verify simple search for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify search box will display suggestions to match the text "<suggestion>"
    Then  verify site number on detail page "<suggestion>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify search box will display suggestions to match the text "<suggestion>"
    Then  verify site number on detail page "<suggestion>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify search box will display suggestions to match the text "<suggestion>"
    Then  verify site number on detail page "<suggestion>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  | suggestion |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |headerLabel1| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |headerLabel1| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |headerLabel1| UrlLink |


  @verifyDashboardPageForExternalAndInternalUsers
  Scenario Outline: verify dashboard for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  | report |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |reports| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |reports| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |reports| UrlLink |

  @verifyManagementAgreementKPIForExternalAndInternalUsers
  Scenario Outline: verify management agreement KPI for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |  report  |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |reportsKPI| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |reportsKPI| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |reportsKPI| UrlLink |


  @verifyTotalSitesKPIForExternalAndInternalUsers
  Scenario Outline: verify total site KPI for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |    report   |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |totalSitesKPI| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |totalSitesKPI| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |totalSitesKPI| UrlLink |


  @verifyTotalAnnualizedRevenueKPIForExternalAndInternalUsers
  Scenario Outline: verify total annualized revenue KPI for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  we get token from site
    Then  I click on my dashboard "<report>"
    When  I send get request to site "<apiLink>"
    Then  Verify the total annualized revenue for external and internal user
#    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    When  we get token from site
    Then  I click on my dashboard "<report>"
    When  I send get request to site "<apiLink>"
    Then  Verify the total annualized revenue for external and internal user
#    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    When  we get token from site
    Then  I click on my dashboard "<report>"
    When  I send get request to site "<apiLink>"
    Then  Verify the total annualized revenue for external and internal user
#    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |    report     |   URL   |    apiLink        |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |totalRevenueKPI| UrlLink | annualizedRevenue |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |totalRevenueKPI| UrlLink | annualizedRevenue |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |totalRevenueKPI| UrlLink |  annualizedRevenue |

  @verifyManagementAgreementListReportForExternalAndInternalUsers
  Scenario Outline: verify management agreement list report for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |   report |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |reportsKPI| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |reportsKPI| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |reportsKPI| UrlLink |


  @verifySitesByManagementAgreementListReportForExternalAndInternalUsers
  Scenario Outline: verify sites by management agreement list report for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |    report    |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |totalSitesKPI| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |totalSitesKPI| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |totalSitesKPI| UrlLink |


  @verifyAccessToRollRentReportForExternalAndInternalUsers
  Scenario Outline: verify access to roll rent report for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |    report   |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |rentRollReport| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |rentRollReport| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |rentRollReport| UrlLink |


  @verifyAccessToForecastReportForExternalAndInternalUsers
  Scenario Outline: verify access to forecast report for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |    report   |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |forecastReport| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |forecastReport| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |forecastReport| UrlLink |

  @verifyAccessToNewLeasingReportForExternalAndInternalUsers
  Scenario Outline: verify access to new leasing report for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |    report   |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |newLeasesReport| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |newLeasesReport| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |newLeasesReport| UrlLink |

  @verifyAccessToLeasingActivityReportForExternalAndInternalUsers
  Scenario Outline: verify access to leasing activity report for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |       report      |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |leasingActivityReport| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |leasingActivityReport| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |leasingActivityReport| UrlLink |

  @viewPortfolioDataForRelationshipForExternalAndInternalUsers
  Scenario Outline: view portfolio data for relationship for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  | report  |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |reportsKPI| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |reportsKPI| UrlLink |


  @viewPortfolioDataForOwnerForExternalAndInternalUsers
  Scenario Outline: view portfolio data for owner for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  | report|     URL   |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |reports| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |reports| UrlLink |


  @viewDataForPortfolioForExternalAndInternalUsers
  Scenario Outline: view data for portfolio for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |   report   |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |totalSitesKPI| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |totalSitesKPI| UrlLink |


  @viewRelationship/Owner/PortfolioForInternalUsers
  Scenario Outline: view relationship/owner/portfolio for internal users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  | report  |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |reportsKPI| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |reportsKPI| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |reportsKPI| UrlLink |

  @viewRelationship/Owner/PortfolioForVBAdmin
  Scenario Outline: view relationship/owner/portfolio for Vb admin

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    Then  verify owner name should be sorted in ascending order "<report1>"
    When  I log out

    Examples:
      |credentials| report  |report1|
      |  admin   |reportsKPI|reports|


  @viewExecutedAgreementDocumentForExternalAndInternalUsers
  Scenario Outline: view executed agreement document for internal/external users

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  I click on view button "<document>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out

    Examples:
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |    report    | document   |     URL    |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |newLeasesReport|viewDocument| UrlLink |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |newLeasesReport|viewDocument| UrlLink |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |newLeasesReport|viewDocument | UrlLink |

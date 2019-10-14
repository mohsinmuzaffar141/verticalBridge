Feature: verify test cases of roles and permission
#
#  @verifyHomePageToExternalUsers
#  Scenario Outline: verify home page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  verify tabs are present under home page "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  verify tabs are present under home page "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  verify tabs are present under home page "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |      credentials     |      tab     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |
#      |    realEstateAdmin   |   homePage   |  rolesPermission |    realEstateUser     |       admin        | portfolioType |
##      | utilityPartnerAdmin  |   homePage   | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType |
##      |    jvPartnerAdmin   |   homePage   | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType |
#
#  @verifyLinksOnHomePageToExternalUsers
#  Scenario Outline: verify links on home page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  verify links to linkedIn page and newsroom page "<link>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  verify links to linkedIn page and newsroom page "<link>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  verify links to linkedIn page and newsroom page "<link>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |      credentials     |     link     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |
#      |    realEstateAdmin   | homePageLink |  rolesPermission |    realEstateUser     |       admin        | portfolioType |
##      | utilityPartnerAdmin  | homePageLink | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType |
##      |    jvPartnerAdmin   |  homePageLink | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType |
#
#
#
#  @verifyMySiteAccessOnMainPageToExternalUsers
#  Scenario Outline: verify my site access on main page for external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click on my sites button
#    Then  verify my site access on main page for internal/external users
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  verify my site access on main page for internal/external users
#    When  I log out
#
#
#    Examples:
#      |      credentials       |  credentialsInternal   |
#      |    realEstateAdmin     |     realEstateUser     |
##      |  utilityPartnerAdmin  |     utilityPartnerUser   |
##      |     jvPartnerAdmin    |       jvPartnerUser     |
#
#  @verifyMySiteAccessOnMainPageToExternal/InternalUsers
#  Scenario Outline: verify my site access on main page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click on my sites button
#    Then  verify my site access on main page for internal/external users
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  verify my site access on main page for internal/external users
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  verify my site access on main page for internal/external users
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |
#      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType |
##      | utilityPartnerAdmin  | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType |
##      |    jvPartnerAdmin   | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType |
#
#  @viewManagementAgreementListToExternalUsers
#  Scenario Outline: view management agreement list for external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click on my sites button
#    Then  verify management agreement list "<credentialsInternal>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  verify management agreement list "<credentialsInternal>"
#    When  I log out
#
#
#    Examples:
#      |      credentials       |  credentialsInternal   |
#      |    realEstateAdmin     |     realEstateUser     |
##      |  utilityPartnerAdmin  |     utilityPartnerUser   |
##      |     jvPartnerAdmin    |       jvPartnerUser     |
#
#
#
#  @viewManagementAgreementListToExternal/InternalUsers
#  Scenario Outline: verify management agreement list on main page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click on my sites button
#    Then  verify management agreement list "<credentialsInternal>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  verify management agreement list "<credentialsInternal>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  verify management agreement list "<credentialsInternal>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |
#      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType |
##      | utilityPartnerAdmin  | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType |
##      |    jvPartnerAdmin   | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType |
#
#  @viewSitesToExternalUsers
#  Scenario Outline: view sites for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click on my sites button
#    Then  verify management agreement list "<credentials>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  verify management agreement list "<credentials>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  verify management agreement list "<credentials>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |
#      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType |
##      | utilityPartnerAdmin  |  rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType |
##      |    jvPartnerAdmin   |   rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType |
#
#
#  @viewMyDashboardPageToExternalUsers
#  Scenario Outline: view management agreement list for external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  I click on my dashboard "<report>"
#    Then  verify reports on my dashboard "<report>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  I click on my dashboard "<report>"
#    Then  verify reports on my dashboard "<report>"
#    When  I log out
#
#
#    Examples:
#      |      credentials       |  credentialsInternal   |  report |
#      |    realEstateAdmin     |     realEstateUser     | reports |
##      |  utilityPartnerAdmin  |     utilityPartnerUser   | reports |
##      |     jvPartnerAdmin    |       jvPartnerUser     |  reports |
#
#
#  @viewAboutPageOnMainPageForExternalUsers
#  Scenario Outline: view about page on main page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  verify content under about tab "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  verify content under about tab "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  verify content under about tab "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |    tab   |
#      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType | homePage |
##      | utilityPartnerAdmin  |  rolesPermission1 |  utilityPartnerUser  |       admin        | portfolioType | homePage |
##      |    jvPartnerAdmin   |   rolesPermission2 |     jvPartnerUser    |        admin       | portfolioType | homePage |
#
#  @viewServicesPageOnMainPageForExternalUsers
#  Scenario Outline: view services page on main page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click "<tab>" on home page
#    Then  verify content under services tab "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click "<tab>" on home page
#    Then  verify content under services tab "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click "<tab>" on home page
#    Then  verify content under services tab "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |      credentials     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |      tab    |
#      |    realEstateAdmin   |  rolesPermission |    realEstateUser     |       admin        | portfolioType | servicesTab |
##      | utilityPartnerAdmin  |  rolesPermission1 |  utilityPartnerUser  |       admin        | portfolioType | servicesTab |
##      |    jvPartnerAdmin   |   rolesPermission2 |     jvPartnerUser    |        admin       | portfolioType | servicesTab |
#
#  @viewContactPageOnMainPageForExternalUsers
#  Scenario Outline: view contact page on main page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click "<tab>" on home page
#    Then  verify content under contact tab "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click "<tab>" on home page
#    Then  verify content under contact tab "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click "<tab>" on home page
#    Then  verify content under contact tab "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |      credentials    |      roles      | credentialsInternal  | credentialsAdmin  |    portfolio  |          tab       |
#      |    realEstateAdmin  | rolesPermission |  realEstateUser     |      admin        | portfolioType  | contactHomePageTab |
##      | utilityPartnerAdmin | rolesPermission1 | utilityPartnerUser  |     admin        | portfolioType | contactHomePageTab |
##      |    jvPartnerAdmin  |  rolesPermission2 |   jvPartnerUser    |       admin       | portfolioType | contactHomePageTab |
#
#  @verifyTabsOnHomePageForExternalAndInternalUsers
#  Scenario Outline: verify tabs on home page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  verify tabs are present under home page "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  verify tabs are present under home page "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  verify tabs are present under home page "<tab>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |      credentials     |      tab     |       roles      |  credentialsInternal  |  credentialsAdmin  |    portfolio  |
#      |    realEstateAdmin   |   homePage   |  rolesPermission |    realEstateUser     |       admin        | portfolioType |
##      | utilityPartnerAdmin  |   homePage   | rolesPermission1 |  utilityPartnerUser   |       admin        | portfolioType |
##      |    jvPartnerAdmin   |   homePage   | rolesPermission2 |     jvPartnerUser     |        admin        | portfolioType |

    #17&18&19
#  @verifyRelationshipNotViewableToExternalUsers
#  Scenario Outline: verify relationship should not be selectable for external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  verify relationship should not be viewable for external users "<external>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  verify relationship should not be viewable for external users "<external>"
#    When  I log out
#
#
#    Examples:
#      |      credentials       |  credentialsInternal   |     external    |
#      |    realEstateAdmin     |     realEstateUser     |   externalUser  |
##      |  utilityPartnerAdmin  |     utilityPartnerUser  |   externalUser  |
##      |     jvPartnerAdmin    |       jvPartnerUser     |   externalUser  |


#  @viewSiteDetailPageForExternalAndInternalUsers
#  Scenario Outline: view site detail page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click on my sites button
#    Then  click on site link "<siteLink>"
#    Then  verify general and contacts section on detailed page "<site>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  click on site link "<siteLink>"
#    Then  verify general and contacts section on detailed page "<site>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  click on site link "<siteLink>"
#    Then  verify general and contacts section on detailed page "<site>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsAdmin>"
#    When  Click checkbox button
#    When  Click on security button "<roles>"
#    When  Click on manage users "<roles>"
#    When  Search the External/Internal users "<roles>"
#    When  Click on external and internal user "<roles>"
#    Then  Click on is internal checkbox "<roles>"
#    Then  Click on save button "<portfolio>"
#    When  I log out
#
#    Examples:
#      |    credentials     |   siteLink     |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |  site  |
#      |  realEstateAdmin   |  detailPage   | rolesPermission |    realEstateUser     |     admin        | portfolioType |siteList|
##      |utilityPartnerAdmin |  detailPage   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |siteList|
##      |  jvPartnerAdmin   |   detailPage  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |siteList |

  @viewSiteHeaderOnDetailPageForExternalAndInternalUsers
  Scenario Outline: view site header on detail page for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify site number on detail page "<siteLink>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify site number on detail page "<siteLink>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify site number on detail page "<siteLink>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |   siteLink     |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |
      |  realEstateAdmin   |  detailPage   | rolesPermission |    realEstateUser     |     admin        | portfolioType |
#      |utilityPartnerAdmin |  detailPage   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |
#      |  jvPartnerAdmin   |   detailPage  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |

  @viewTabsOnSiteDetailPageForExternalAndInternalUsers
  Scenario Outline: view tabs on detail page for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify tabs on site detail page "<site>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify tabs on site detail page "<site>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  verify tabs on site detail page "<site>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |   siteLink     |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |  site  |
      |  realEstateAdmin   |  detailPage   | rolesPermission |    realEstateUser     |     admin        | portfolioType |siteTabs|
#      |utilityPartnerAdmin |  detailPage   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |siteTabs|
#      |  jvPartnerAdmin   |   detailPage  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | siteTabs|

  @viewFCCLinkOnFCCTabForExternalAndInternalUsers
  Scenario Outline: view fcc link on fcc tab for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify link under FCC tab "<tab>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify link under FCC tab "<tab>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify link under FCC tab "<tab>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |   tab   |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |  siteLink  |
      |  realEstateAdmin   |  FCC   | rolesPermission |    realEstateUser     |     admin        | portfolioType | detailPage |
#      |utilityPartnerAdmin |  FCC   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType | detailPage|
#      |  jvPartnerAdmin   |   FCC  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | detailPage |


  @verifyDevelopmentTabNotViewableToExternalUsers
  Scenario Outline: verify development tab should not be viewable for external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  click "<tab>" on site detail page
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click "<tab>" on site detail page
    When  I log out


    Examples:
      |      credentials       |  credentialsInternal   |          tab        |
      |    realEstateAdmin     |     realEstateUser     |   leasingActivity3  |
#      |  utilityPartnerAdmin  |     utilityPartnerUser  |   leasingActivity3  |
#      |     jvPartnerAdmin    |       jvPartnerUser     |   leasingActivity3  |

  @verifyOptionsNotPresentUnderDocumentTabForExternalAndInternalUsers
  Scenario Outline: verify options not present under document tab for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify options are not present under document tab
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify options are not present under document tab
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify options are not present under document tab
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |       tab      |      roles     |  credentialsInternal  | credentialsAdmin |    portfolio  |  siteLink  |
      |  realEstateAdmin   |  documentTab   | rolesPermission |    realEstateUser     |     admin        | portfolioType | detailPage |
#      |utilityPartnerAdmin |  documentTab   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType | detailPage|
#      |  jvPartnerAdmin   |   documentTab  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | detailPage |

  @verifySearchDocumentUnderDocumentTabForExternalAndInternalUsers
  Scenario Outline: verify search document under document tab for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify files under document tab "<tab>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify files under document tab "<tab>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  click on site link "<siteLink>"
    Then  click "<tab>" on site detail page
    Then  verify files under document tab "<tab>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |       tab       |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |   siteLink  |
      |  realEstateAdmin   |  documentTab1   | rolesPermission |    realEstateUser     |     admin        | portfolioType | detailPage1 |
#      |utilityPartnerAdmin |  documentTab1   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType | detailPage1|
#      |  jvPartnerAdmin   |   documentTab1  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | detailPage1 |

    #20&22
  @verifySearchForExternalAndInternalUsers
  Scenario Outline: verify simple search for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify search box on main menu
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify search box on main menu
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify search box on main menu
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |

  @verifySimpleSearchForExternalAndInternalUsers
  Scenario Outline: verify simple search for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  verify search box will display suggestions to match the text "<suggestion>"
    Then  verify site number on detail page "<suggestion>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify search box will display suggestions to match the text "<suggestion>"
    Then  verify site number on detail page "<suggestion>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  verify search box will display suggestions to match the text "<suggestion>"
    Then  verify site number on detail page "<suggestion>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  | suggestion |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |headerLabel1|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |headerLabel1|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |headerLabel1|


  @verifyDashboardPageForExternalAndInternalUsers
  Scenario Outline: verify dashboard for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  | report |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |reports|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |reports|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |reports|

  @verifyManagementAgreementKPIForExternalAndInternalUsers
  Scenario Outline: verify management agreement KPI for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |  report  |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |reportsKPI|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |reportsKPI|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |reportsKPI|


  @verifyTotalSitesKPIForExternalAndInternalUsers
  Scenario Outline: verify total site KPI for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |    report   |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |totalSitesKPI|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |totalSitesKPI|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |totalSitesKPI|


  @verifyTotalAnnualizedRevenueKPIForExternalAndInternalUsers
  Scenario Outline: verify total annualized revenue KPI for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |    report     |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |totalRevenueKPI|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |totalRevenueKPI|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |totalRevenueKPI|

  @verifyManagementAgreementListReportForExternalAndInternalUsers
  Scenario Outline: verify management agreement list report for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement list "<credentialsInternal>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |   report |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |reportsKPI|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |reportsKPI|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |reportsKPI|


  @verifySitesByManagementAgreementListReportForExternalAndInternalUsers
  Scenario Outline: verify sites by management agreement list report for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |    report     |
      |  realEstateAdmin   | rolesPermission |    realEstateUser     |     admin        | portfolioType |totalSitesKPI|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |totalSitesKPI|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType |totalSitesKPI|


  @verifyAccessToRollRentReportForExternalAndInternalUsers
  Scenario Outline: verify access to roll rent report for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |    report   |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |rentRollReport|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |rentRollReport|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |rentRollReport|


  @verifyAccessToForecastReportForExternalAndInternalUsers
  Scenario Outline: verify access to forecast report for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |    report   |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |forecastReport|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |forecastReport|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |forecastReport|

  @verifyAccessToNewLeasingReportForExternalAndInternalUsers
  Scenario Outline: verify access to new leasing report for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |    report   |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |newLeasesReport|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |newLeasesReport|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |newLeasesReport|

  @verifyAccessToLeasingActivityReportForExternalAndInternalUsers
  Scenario Outline: verify access to leasing activity report for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |       report      |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |leasingActivityReport|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |leasingActivityReport|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |leasingActivityReport|

  @viewPortfolioDataForRelationshipForExternalAndInternalUsers
  Scenario Outline: view portfolio data for relationship for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  | report  |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |reportsKPI|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |reportsKPI|


  @viewPortfolioDataForOwnerForExternalAndInternalUsers
  Scenario Outline: view portfolio data for owner for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  | report|
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |reports|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |reports|


  @viewDataForPortfolioForExternalAndInternalUsers
  Scenario Outline: view data for portfolio for internal/external users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  | report  |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |totalSitesKPI|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |totalSitesKPI|


  @viewRelationship/Owner/PortfolioForInternalUsers
  Scenario Outline: view relationship/owner/portfolio for internal users

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify owner name should be sorted in ascending order "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  | report  |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |reportsKPI|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |reportsKPI|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |reportsKPI|

  @viewRelationship/Owner/PortfolioForVBAdmin
  Scenario Outline: view relationship/owner/portfolio for Vb admin

    Given I am on vertical bridge Page
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

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    Then  click on my sites button
    Then  I click on view button "<document>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsAdmin>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on is internal checkbox "<roles>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<report>"
    When  I log out
    Given I am on vertical bridge Page
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
      |    credentials     |      roles      |  credentialsInternal  | credentialsAdmin|    portfolio  |    report    | document   |
      |  realEstateAdmin   | rolesPermission |    realEstateUser    |     admin       | portfolioType |newLeasesReport|viewDocument|
#      |utilityPartnerAdmin |rolesPermission1 |  utilityPartnerUser |     admin       | portfolioType |newLeasesReport|viewDocument|
#      |  jvPartnerAdmin   |rolesPermission2 |     jvPartnerUser   |     admin       | portfolioType |newLeasesReport|viewDocument |

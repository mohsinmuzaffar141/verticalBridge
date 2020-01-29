Feature: verify test cases on floyd site

  #130&132
  @createNewPortfolio
  Scenario Outline: create or add new portfolio on floyd site

    Given I am on floyd Page
    When  Click on additional features link "<site>"
    When  Click on add a portfolio "<site>"
    When  Login to vertical bridge with "<credentials>"
    Then  Click on plus icon button
    Then  Click on portfolio type "<portfolio>"
    Then  Select portfolio name "<portfolio>"
    Then  Click on save button "<portfolio>"
    Then  verify portfolio should be created "<site>"
    Then  verify tabs for portfolio "<portfolio>"
    When  I log out from floyd site

    Examples:
      |   credentials   |     site     |    portfolio   |
      |      admin      |   floydSite  |  portfolioType |

    #DataValidation
#  @verifyTabsDataOnPartnerPortalSiteAndFloydSite
#  Scenario Outline: verify tabs data on partner portal and floyd site should be same
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    When  Click checkbox button
#    When  I click to the select partner view button
#    When  selects the "<relationships>"
#    Then  click the select button
#    Then  click on my sites button
#    Then  click on site link "<relationships>"
#    Then  verify tabs data on partner portal site "<partnerPortalSite>"
#    Then  click "<tab>" on site detail page
#    Then  verify tabs data on partner portal site "<partnerPortalSite1>"
#    When  I log out
#    Given I am on floyd Page
#    Then  search the values in floyd site "<partnerPortalSite>"
#    Then  verify tabs data on floyd site "<partnerPortalSite>"
#    Then  click "<partnerPortalSite>" on floyd site
#    Then  verify tabs data div on partner portal site "<partnerPortalSite1>"
#    Then  I click on floyd stage "<site>"
#    When  Click on additional features link "<site>"
#    When  Click on add a portfolio "<site>"
#    When  Login to vertical bridge with "<credentials>"
#    When  I log out from floyd site
#
#    Examples:
#      | credentials  |  relationships   |     partnerPortalSite    |        site        |     tab     |   partnerPortalSite1   |
#      |   admin      | dataValidation  |  partnerPortalTabsData   |   floydSiteLeasing |  propertyTab |  partnerPortalTabsData1|
#
#    #RolesAndPermission
#  @viewTabsOnSiteDetailPageForExternalAndInternalUsers
#  Scenario Outline: view tabs on detail page for internal/external users
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    Then  click on my sites button
#    Then  click on site link "<siteLink>"
#    Then  verify tabs on site detail page "<site>"
#    When  I log out
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentialsInternal>"
#    Then  click on my sites button
#    Then  click on site link "<siteLink>"
#    Then  verify tabs on site detail page "<site>"
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
#    Then  verify tabs on site detail page "<site>"
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
#      |  realEstateAdmin   |  detailPage   | rolesPermission |    realEstateUser     |     admin        | portfolioType |siteTabs|
##      |utilityPartnerAdmin |  detailPage   |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType |siteTabs|
##      |  jvPartnerAdmin   |   detailPage  |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | siteTabs|



#  @verifyAttributesFloydSites
#  Scenario Outline: verify attributes on floyd site
#
#    Given I am on floyd Page
#    When  Click on additional features link "<site>"
#    When  Click on add a portfolio "<site>"
#    When  Login to vertical bridge with "<credentials>"
#    Then  Click on plus icon button
#    Then  verify attributes on floyd site
#    Then  Click on save button "<tab>"
#    When  I log out from floyd site
#
#    Examples:
#      |   credentials   |     site     |       tab       |
#      |      admin      |   floydSite  |  portfolioType1 |

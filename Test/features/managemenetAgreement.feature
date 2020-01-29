Feature: verify data against management agreement

  @managementData
  Scenario Outline: verify data against management agreement

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify management agreement data "<relationships>"
    When  I log out

    Examples:
       | credentials  |  relationships |    URL    |
       |   admin      |     relation   | VBStaging |

  @sortingOwnerName
  Scenario Outline: verify that owner name should be sorted in ascending order

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify owner name should be sorted in ascending order "<relationships>"
    When  I log out

    Examples:
       | credentials  |  relationships |    URL    |
       |   admin      |     relation   | VBStaging |

  @verifyRevenue
  Scenario Outline: verify revenue against management agreement

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify revenue "<relationships>"
    When  I log out

    Examples:
      | credentials  |  relationships |    URL    |
      |   admin      |     relation   | VBStaging |

  @verifyPortfolioList
  Scenario Outline: verify portfolio list

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  I click on relationship "<relationships>"
    When  I log out

    Examples:
      | credentials  | relationships |    URL    |
      |   admin      |   relation    | VBStaging |

  @verifyFilterEnable
  Scenario Outline: verify filler should be enable

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  verify filter is enabled
    When  I log out

    Examples:
          | credentials  |  relationships |    URL    |
          |   admin      |     relation   | VBStaging |

  @verifySites
  Scenario Outline: verify sites against portfolio

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify that sites should be displayed "<relationships>"
    When  I log out

    Examples:
           | credentials  |  relationships |    URL    |
           |   admin      |     relation   | VBStaging |

  @searchSite
  Scenario Outline: verify search against management agreement

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on filter on/off tab
    Then  search the management agreement list "<searchFilter>"
    When  I log out

    Examples:
        | credentials  |  relationships | searchFilter |     URL    |
        |   admin      |     relation   |filterSearch  | VBStaging |

  @ascendingDescendingOrder
  Scenario Outline: verify ascending and descending order of management agreement

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on ascending and descending order tab "<order>"
    When  I log out

    Examples:
      | credentials  |  order    |  relationships |    URL    |
      |   admin      |  table    |   relation     | VBStaging |
      |   admin      |  table1   |   relation     | VBStaging |

  @verifyDownloadSiteToExcelFile
  Scenario Outline: verify the my site file should be downloaded

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on export to excel button "<download>"
    Then  verify the file should be downloaded
    When  I log out

    Examples:
      | credentials  |      download      |  relationships |    URL    |
      |   admin      |   downloadButton   |   relation     | VBStaging |

  @verifyRelationship/Owner/PortfolioData
  Scenario Outline: view relationship/owner/portfolio for Vb admin

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify owner name should be sorted in ascending order "<report>"
    Then  verify owner name should be sorted in ascending order "<report1>"
    When  I log out

    Examples:
      | credentials |   report   |  report1  |  relationships |    URL    |
      |   admin    |  reportsKPI |  reports  |    relation    | VBStaging |

  @verifyDropDownForRelationship/Owner/PortfolioData
  Scenario Outline: verify dropdown for relationship/owner/portfolio

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  Click on security button "<roles>"
    When  Click on manage users "<roles>"
    When  Search the External/Internal users "<roles>"
    When  Click on external and internal user "<roles>"
    Then  Click on relationship dropdown "<relationships>"
    Then  Click on relationship dropdown "<relation>"
    Then  Click on save button "<portfolio>"
    When  I log out
    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify owner name should be sorted in ascending order "<report>"
    Then  verify owner name should be sorted in ascending order "<report1>"
    When  I log out

    Examples:
      | credentials |      roles    |  portfolio    | relationships  |     relation     |credentialsInternal| report  | report1|    URL    |
      |   admin    | rolesPermission| portfolioType | relationship1 | relationshipRole1 |  realEstateUser  |reportsKPI|reports| VBStaging |
#      |   admin    | rolesPermission| portfolioType | relationship2 | relationshipRole2 |  realEstateUser  |reportsKPI|reports| VBStaging |
#      |   admin    | rolesPermission| portfolioType | relationship  | relationshipRole  |  realEstateUser  |reportsKPI|reports| VBStaging |


  @verifyExternalUsersAccessDataForPortfolio
  Scenario Outline: verify external user should access data for portfolio

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentialsInternal>"
    Then  click on my sites button
    Then  verify relationship should not be viewable for external users "<external>"
    Then  verify owner name should be sorted in ascending order "<report>"
    Then  verify owner name should be sorted in ascending order "<report1>"
    When  I log out

    Examples:
         | credentialsInternal  |    report    |  report1   |   external    |    URL    |
         |    realEstateUser    |  reportsKPI  |   reports  | externalUser  | VBStaging |
#         |  utilityPartnerUser  |  reportsKPI  |   reports  | externalUser  | VBStaging |
#         |  jvPartnerUser      |   reportsKPI  |   reports  | externalUser  | VBStaging |

  @verifyInternalUsersAccessDataForPortfolio
  Scenario Outline: verify internal user should access data for portfolio

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
    Then  verify owner name should be sorted in ascending order "<report>"
    Then  verify owner name should be sorted in ascending order "<report1>"
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
      |      roles      |  credentialsInternal  | credentialsAdmin |    portfolio  |   report    |  report1   |    URL    |
      |rolesPermission  |    realEstateUser     |     admin        | portfolioType | reportsKPI  |   reports  | VBStaging |
#      |rolesPermission1 |  utilityPartnerUser   |     admin        | portfolioType | reportsKPI  |   reports  | VBStaging |
#      |rolesPermission2 |     jvPartnerUser     |     admin        | portfolioType | reportsKPI  |   reports  | VBStaging |
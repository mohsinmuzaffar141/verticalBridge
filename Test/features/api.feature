Feature: Get token from vertical bridge site

  @token  @regression
  Scenario Outline: verify that all the contacts of site should be displayed

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    When  we get token from site
    When  I log out
    When  I send get request to site "<apiLink>"

    Examples:
      | credentials  |        apiLink        |   relationships  |     URL   |
      | admin        |    siteAllContacts    |  dataValidation  |  UrlLink |


  @verifyHomePage  @regression
  Scenario Outline: verify that home page should be displayed

    When I send get request to site "<apiLink>"

    Examples:
      |     apiLink        |
      |     homepage       |


  @gettingUpSiteContacts
  Scenario Outline: verify that getting up site contacts

    When I send get request to site "<apiLink>"

    Examples:
      |       apiLink       |
      |     siteContacts    |


  @partnerPortalPage
  Scenario Outline: Display the partner portal page

    When I send get request to site "<apiLink>"

    Examples:
      |       apiLink        |
      |     partnerPortal    |

  @groundRightsContacts
  Scenario Outline: Display the ground rights contacts

    When I send get request to site "<apiLink>"

    Examples:
      |            apiLink          |
      |     groundRightsContacts    |

#   site changed
#  @portfolioContacts
#  Scenario Outline: Display the portfolio contacts
#
#    When I send get request to site "<apiLink>"
#
#    Examples:
#      |         apiLink          |
#      |     portfolioContacts    |
#
#  @tenantContacts
#  Scenario Outline: Display the tenant contacts
#
#    When I send get request to site "<apiLink>"
#
#    Examples:
#      |        apiLink        |
#      |     tenantContacts    |


  @deploymentData
  Scenario Outline: Get deployment data

    When I send get request to site "<apiLink>"

    Examples:
      |        apiLink        |
      |     deploymentData    |

  @managementAgreementList
  Scenario Outline: Get management agreement list

    When I send get request to site "<apiLink>"

    Examples:
      |             apiLink            |
      |     managementAgreementList    |


  @fccSiteData
  Scenario Outline: Display FCC site data

    When I send get request to site "<apiLink>"

    Examples:
      |       apiLink      |
      |     FCCSiteData    |

  @leasingActivitySiteData
  Scenario Outline: Display leasing activity site data

    When I send get request to site "<apiLink>"

    Examples:
      |          apiLink           |
      |     leasingActivityData    |

  @groundRights
  Scenario Outline: Display ground rights data

    When I send get request to site "<apiLink>"

    Examples:
      |         apiLink         |
      |     groundRightsData    |

  @tenantHeaderData
  Scenario Outline: Display tenant header data

    When I send get request to site "<apiLink>"

    Examples:
      |       apiLink       |
      |     tenantHeader    |

  @siteCommentsForOperationTab
  Scenario Outline: Display site comments for operation tab

    When I send get request to site "<apiLink>"

    Examples:
      |      apiLink        |
      |     operationTab    |

#  unexpected token $
#  @getRevenuePortfolio
#  Scenario Outline: Display revenue portfolio
#
#    When I send get request to site "<apiLink>"
#
#    Examples:
#      |         apiLink         |
#      |     revenuePortfolio    |

  @mapSiteDetail
  Scenario Outline: Display data related to map

    When I send get request to site "<apiLink>"

    Examples:
      |   apiLink  |
      |     map    |

  @myDashboardDetail
  Scenario Outline: Display data related to my dashboard

    When I send get request to site "<apiLink>"

    Examples:
      |     apiLink      |
      |   myDashboard    |

  @getAnnualizedRevenue
  Scenario Outline: Display data related to annualized revenue

    When I send get request to site "<apiLink>"

    Examples:
      |        apiLink         |
      |   annualizedRevenue    |

  @getRadCentreData
  Scenario Outline: Display data related to rad centre

    When I send get request to site "<apiLink>"

    Examples:
      |      apiLink       |
      |   radCenterData    |

  @getSiteNumberData
  Scenario Outline: Display data related to site number

    When I send get request to site "<apiLink>"

    Examples:
      |    apiLink     |
      |   siteNumber   |

  @advancedSearchViewModel
  Scenario Outline: Display data related to advance search view model

    When I send get request to site "<apiLink>"

    Examples:
      |      apiLink       |
      |   advanceSearch    |

  @getOperationDataBySiteNumber
  Scenario Outline: Display operation data by site number

    When I send get request to site "<apiLink>"

    Examples:
      |      apiLink       |
      |   operationsData   |


  @getManagementAgreementOnly
  Scenario Outline: Display data related to management agreement only

    When I send get request to site "<apiLink>"

    Examples:
      |      apiLink       |
      |   agreementOnly    |

  @getRoles
  Scenario Outline: Display data related to roles

    When I send get request to site "<apiLink>"

    Examples:
      |  apiLink  |
      |   roles   |

  @getUsersById
  Scenario Outline: Display users by id

    When I send get request to site "<apiLink>"

    Examples:
      |  apiLink  |
      |   user    |

  @getRelationshipOwnerPortfolio
  Scenario Outline: Display all the relationship Owners and portfolio

    When I send get request to site "<apiLink>"

    Examples:
      |             apiLink             |
      |   relationshipOwnerPortfolio    |

  @getImpersonateData
  Scenario Outline: Display save impersonate data

    When I send get request to site "<apiLink>"

    Examples:
      |       apiLink         |
      |  saveImpersonateData  |

#  @getTenantLeases
#  Scenario Outline: Display data related to tenant leases
#
#    When I send get request to site "<apiLink>"
#
#    Examples:
#      |    apiLink     |
#      |  tenantLeases  |
#

    @getPartnerRolesPermission
  Scenario Outline: Display data related to role page permission

    When I send get request to site "<apiLink>"

    Examples:
      |        apiLink       |
      |  rolePagePermission  |


  @permissionForLoggedInUser
  Scenario Outline: Display data related to logged in user

    When I send get request to site "<apiLink>"

    Examples:
      |        apiLink       |
      |  rolePagePermission  |

  @getAppConfig
  Scenario Outline: get app config data

    When I send get request to site "<apiLink>"

    Examples:
      |   apiLink   |
      |  appConfig  |

#  @simpleSearchValue
#  Scenario Outline: Display data related to simple search
#
#    When I send get request to site "<apiLink>"
#
#    Examples:
#      |    apiLink     |
#      |  simpleSearch  |




    #POST_REQUEST_TEST_CASES


  @rentRollReportInformation
  Scenario Outline: Display the information of rent roll report

    When I send post request to site "<apiLink>"

    Examples:
      |   apiLink   |
      |   rentRoll  |

  @leasingReportInformation
  Scenario Outline: Display the information of leasing report

    When I send post request to site "<apiLink>"

    Examples:
      |       apiLink     |
      |   leasingActivity |

  @dataManagementAgreementList
  Scenario Outline: Display the data of management agreement from dashboard

    When I send post request to site "<apiLink>"

    Examples:
      |          apiLink        |
      | dataManagementAgreement |

  @getManagementAgreementList
  Scenario Outline: getting the data of management agreement

    When I send post request to site "<apiLink>"

    Examples:
      |          apiLink        |
      |  getManagementAgreement |


  @leasesReportData
  Scenario Outline: Display the data of lease report

    When I send post request to site "<apiLink>"

    Examples:
      |    apiLink   |
      | leasesReport |

  @forecastReport
  Scenario Outline: Display the data of forecast report

    When I send post request to site "<apiLink>"

    Examples:
      |     apiLink     |
      |  forecastReport |

#Server Error
#  @getAdvanceSearch
#  Scenario Outline: Display the data of advance search
#
#    When I send post request to site "<apiLink>"
#
#    Examples:
#      |      apiLink     |
#      | advanceSearchGet |


  @userList
  Scenario Outline: Display the data of user list

    When I send post request to site "<apiLink>"

    Examples:
      | apiLink  |
      | userList |


  @documentList
  Scenario Outline: Display the list of document

    When I send post request to site "<apiLink>"

    Examples:
      |    apiLink   |
      | documentList |


  @saveRolePermission
  Scenario Outline: save partner portal role page permissions

    When I send post request to site "<apiLink>"

    Examples:
      |     apiLink    |
      | RolePermission |

#  @siteByPortfolioGuid
#  Scenario Outline: Get data of sites by portfolio guid
#
#    When I send post request to site "<apiLink>"
#
#    Examples:
#      |    apiLink    |
#      | portfolioGuid |

#JASON
#  @createUser
#  Scenario Outline: new user should be created
#
#    When I send post request to site "<apiLink>"
#
#    Examples:
#      |   apiLink  |
#      | createUser |

#  @updateUser
#  Scenario Outline: new user should be updated
#
#    When I send put request to site "<apiLink>"
#
#    Examples:
#      |  apiLink   |
#      | updateUser |
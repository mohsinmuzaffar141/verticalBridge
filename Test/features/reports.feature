Feature: verify test cases of reports

  @verifyReports
  Scenario Outline: verify reports on my dashboard

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out


    Examples:
      | credentials  |  relationships |     report   |
      |   admin      |     relation   |    reports   |

  @clickManagementAgreementReport
  Scenario Outline: click management agreement report on my dashboard

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement report data "<report>"
    When  I log out


    Examples:
      | credentials  |  relationships |      report    |
      |   admin      |     relation   |    totalSites   |


  @verifyDashboard
  Scenario Outline: verify dashboard option on portal

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify dashboard option on portal "<report>"
    When  I log out


    Examples:
      | credentials  |  relationships |   report  |
      |   admin      |     relation   |  reports  |

  @verifyExecutedDate
  Scenario Outline: verify executed date on my dashboard

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  verify executed date on my dashboard
    When  I log out


    Examples:
      | credentials  |  relationships |   report  |
      |   admin      |     relation   | reports   |

  @verifyTotalManagementAgreement
  Scenario Outline: verify management agreement

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out


    Examples:
      | credentials  |  relationships |     report   |
      |   admin      |     relation   |    reports   |
      |   admin      |     relation   |   totalSites |
      |   admin      |     relation   | totalRevenue |



  @clickManagementAgreement
  Scenario Outline: click management agreement on my dashboard

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify management agreement data "<relationships>"
    When  I log out


    Examples:
      | credentials  |  relationships |     report   |
      |   admin      |     relation   |    reports   |



    #Rent Roll Report
#  @verifyActiveTenantUnderRentRollReport
#  Scenario Outline: verify active tenant should be present under rent roll report
#
#    Given I am on vertical bridge Page
#    When  Login to vertical bridge with "<credentials>"
#    When  Click checkbox button
#    When  I click to the select partner view button
#    When  selects the "<relationships>"
#    Then  click the select button
#    Then  I click on my dashboard "<report>"
#    Then  click management agreement on my dashboard "<report>"
#    Then  verify active tenant should be present under rent roll report "<report>"
#    When  I log out
#
#
#    Examples:
#      | credentials  |  relationships |        report       |
#      |   admin      |     relation   |    rentRollReport   |

  @verifySearchAgainstRentRollReport
  Scenario Outline: verify search against rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  search the rent roll report list "<report>"
    When  I log out


    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    rentRollReport   |

  @verifyAscendingDescendingAgainstRentRollReport
  Scenario Outline: verify ascending & descending against rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify ascending and descending order of reports "<order>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |   order   |
      |   admin      |     relation   |    rentRollReport   |   table   |

  @verifyRentRollReportPaginated
  Scenario Outline: verify rent roll report should be paginated

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be paginated "<order>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |   order   |
      |   admin      |     relation   |    rentRollReport   |   table   |

  @downloadRentRollReport
  Scenario Outline: verify rent roll report should be paginated

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify rent roll report should be downloaded "<order>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |   order   |
      |   admin      |     relation   |    rentRollReport   |   table   |


  @verifyFilterAgainstRentRollReport
  Scenario Outline: verify filter against rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  click on filter on/off tab
    Then  filter the rent roll report list "<searchFilter>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |   searchFilter   |
      |   admin      |     relation   |    rentRollReport   |   filterReport  |

  @clickSiteNumberOnRentRollReport
  Scenario Outline: click site number on rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  click on site link "<site>"
    Then  verify site number on detail page "<site>"
    Then  verify site Name on detail page "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |   site   |
      |   admin      |     relation   |    rentRollReport   |  report  |

  @verifyLeasesTabLinkOnRentRollReport
  Scenario Outline: verify leases number on rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  click on site link "<site>"
    Then  verify leases tab attribute should be present "<site>"
    Then  verify data present on leases tab "<site>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |          site        |
      |   admin      |     relation   |    rentRollReport   |  leasesNumberReport  |

  @verifyAttributesAgainstRentRollReport
  Scenario Outline: verify leases number on rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify relationship should be present on the top "<relationships>"
    Then  verify executed date on my dashboard
    Then  verify logo and rent roll present on page "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    rentRollReport   |


  @verifyColumnAgainstRentRollReport
  Scenario Outline: verify column and fields against rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify table header of rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    rentRollReport   |

  @verifyFooterOnRentRollReport
  Scenario Outline: verify footer on rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify that records should be displayed on rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    rentRollReport   |


    #17&18
  @generateRentRollReport
  Scenario Outline: verify no parameter should be passed to generate rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    rentRollReport   |


    #ForeCast Report
  #32&38&39
  @generateForecastReport
  Scenario Outline: verify footer on rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  Enter start date on forecast report "<report>"
    Then  Enter end date on forecast report "<report>"
    Then  Click on generate report button "<report>"
    Then  verify that records should be displayed on rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    forecastReport   |


  @defaultStartDateOnForecastReport
  Scenario Outline: verify default start date on forecast report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify default start date on forecast report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    forecastReport   |

  @defaultEndDateOnForecastReport
  Scenario Outline:  verify default end date on forecast report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify default end date on forecast report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    forecastReport   |

  @enterStartDateToRetrieveForecastReport
  Scenario Outline: verify footer on rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  Enter start date on forecast report "<report>"
    Then  Click on generate report button "<report>"
    Then  verify that records should be displayed on rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    forecastReport   |

  @enterEndDateToRetrieveForecastReport
  Scenario Outline: verify footer on rent roll report

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  Enter end date on forecast report "<report>"
    Then  Click on generate report button "<report>"
    Then  verify that records should be displayed on rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    forecastReport   |
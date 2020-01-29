Feature: verify test cases of reports

  @verifyScrollMoveOnForecastReport
  Scenario Outline: verify scroll horizontally on forecast report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify the scroll should move
    When  I log out

    Examples:
      | credentials  |  relationships |           report          |      URL        |
      |   admin      |     relation   |    filterReportForecast   |    VBStaging    |

    @verifyActiveTenantUnderRentRollReport
  Scenario Outline: verify active tenant should be present under report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify active tenant should be present under rent roll report "<report>"
    When  I log out


    Examples:
      | credentials  |  relationships |             report         |    URL     |
      |   admin      |     relation   |        rentRollReport      | VBStaging  |
      |   admin      |     relation   |       rentRollReport1      | VBStaging  |
      |   admin      |     relation   |       newLeasesReport      | VBStaging  |
      |   admin      |     relation   |       reportForecast       | VBStaging  |
      |   admin      |     relation   |    leasingActivityReport   | VBStaging  |


  @verifyReports
  Scenario Outline: verify reports on my dashboard

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  verify reports on my dashboard "<report>"
    When  I log out


    Examples:
      | credentials  |  relationships |     report   |    URL     |
      |   admin      |     relation   |    reports   | VBStaging |

  @clickManagementAgreementReport
  Scenario Outline: click management agreement report on my dashboard

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |      report    |    URL     |
      |   admin      |     relation   |    totalSites  | VBStaging |


  @verifyDashboard
  Scenario Outline: verify dashboard option on portal

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  verify dashboard option on portal "<report>"
    When  I log out


    Examples:
      | credentials  |  relationships |   report  |    URL     |
      |   admin      |     relation   |  reports  | VBStaging |

  @verifyExecutedDate
  Scenario Outline: verify executed date on my dashboard

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  verify executed date on my dashboard
    When  I log out


    Examples:
      | credentials  |  relationships |   report  |   URL     |
      |   admin      |     relation   | reports   | VBStaging |

  @verifyTotalManagementAgreement
  Scenario Outline: verify management agreement

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  verify management agreement count "<report>"
    When  I log out


    Examples:
      | credentials  |  relationships |     report   |    URL    |
      |   admin      |     relation   |    reports   | VBStaging |
      |   admin      |     relation   |   totalSites | VBStaging |
      |   admin      |     relation   | totalRevenue | VBStaging |



  @clickManagementAgreement
  Scenario Outline: click management agreement on my dashboard

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |     report   |    URL     |
      |   admin      |     relation   |    reports   | VBStaging |



    #Rent Roll Report

  @verifySearchAgainstRentRollReport
  Scenario Outline: verify search against rent roll report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    rentRollReport   | VBStaging |

  @verifyAscendingDescendingAgainstRentRollReport
  Scenario Outline: verify ascending & descending against rent roll report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |   order   |    URL     |
      |   admin      |     relation   |    rentRollReport   |   table   | VBStaging |

  @verifyRentRollReportPaginated
  Scenario Outline: verify rent roll report should be paginated

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |   order   |    URL     |
      |   admin      |     relation   |    rentRollReport   |   table   | VBStaging |

  @downloadRentRollReport
  Scenario Outline: verify rent roll report should be downloaded

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |   order   |    URL     |
      |   admin      |     relation   |    rentRollReport   |   table   | VBStaging |


  @verifyFilterAgainstRentRollReport
  Scenario Outline: verify filter against rent roll report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |   searchFilter   |    URL     |
      |   admin      |     relation   |    rentRollReport   |   filterReport  | VBStaging |

  @clickSiteNumberOnRentRollReport
  Scenario Outline: click site number on rent roll report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |   site   |    URL     |
      |   admin      |     relation   |    rentRollReport   |  report  | VBStaging |

  @verifyLeasesTabLinkOnRentRollReport
  Scenario Outline: verify leases number on rent roll report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |          site        |    URL     |
      |   admin      |     relation   |    rentRollReport   |  leasesNumberReport  | VBStaging |

  @verifyAttributesAgainstRentRollReport
  Scenario Outline: verify attributes on rent roll report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify relationship should be present on the top "<relationships>"
    Then  verify executed date report on my dashboard
    Then  verify logo and rent roll present on page "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    rentRollReport   | VBStaging |


  @verifyColumnAgainstRentRollReport
  Scenario Outline: verify column and fields against rent roll report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    rentRollReport   | VBStaging |

  @verifyHeaderAgainstRentRollReport
  Scenario Outline: verify header against rent roll report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify header against rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    rentRollReport1  | VBStaging |


  @verifyFooterOnRentRollReport
  Scenario Outline: verify footer on rent roll report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    rentRollReport   | VBStaging |


    #17&18
  @generateRentRollReport
  Scenario Outline: verify no parameter should be passed to generate rent roll report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    rentRollReport   | VBStaging |

  @verifyDataOfRentReportAgainstFloydSite
  Scenario Outline: verify data of rent roll report against floyd site

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify data of rent roll report against partner portal "<partnerPortal>"
    When  I log out
    Given I am on floyd Page
    Then  search the values in floyd site "<site>"
    Then  verify data of rent roll report against floyd site "<floydSite>"
    Then  I click on floyd stage "<floydSite>"
    When  Click on additional features link "<site>"
    When  Click on add a portfolio "<site>"
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I log out from floyd site

    Examples:
      | credentials  |  relationships |     report       |   partnerPortal     |  site      |  floydSite     |    URL     |
      |   admin      |     relation   | rentRollReport  | partnerPortalValue  |  floydSite  | floydSiteValue | VBStaging |

  @verifyActiveSitesAgainstRentRollReport
  Scenario Outline: verify active sites against rent roll report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  verify active sites against rent roll report "<report>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<site>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify sites against rent roll report "<site>"
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify that records should be displayed on rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |              report         |           site         |    URL     |
      |   admin      |     relation   |         rentRollReport     |    rentRollReportSites  | VBStaging |
      |   admin      |     relation   |        forecastReport      |    rentRollReportSites  | VBStaging |
      |   admin      |     relation   |       newLeasesReport      |    rentRollReportSites  | VBStaging |
      |   admin      |     relation   |    leasingActivityReport   |    rentRollReportSites | VBStaging |

    #ForeCast Report
  #32&38&39
  @generateForecastReport
  Scenario Outline: generate forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |

  @downloadForecastReport
  Scenario Outline: verify forecast report should be downloaded

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |        order      |    URL     |
      |   admin      |     relation   |    forecastReport   |   tableForecast   | VBStaging |


  @defaultStartDateOnForecastReport
  Scenario Outline: verify default start date on forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |

  @defaultEndDateOnForecastReport
  Scenario Outline:  verify default end date on forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |

  @enterStartDateToRetrieveForecastReport
  Scenario Outline: enter start date to retrieve forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |

  @enterEndDateToRetrieveForecastReport
  Scenario Outline: enter end date to retrieve forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |

  @enterStartAndEndDateFromCalendarOnForecastReport
  Scenario Outline: verify footer on rent roll report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  click start date from calendar on forecast report "<report>"
    Then  click end date from calendar on forecast report "<report>"
    Then  Click on generate report button "<report>"
    Then  verify that records should be displayed on rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |

  @verifyFilterAgainstForecastReport
  Scenario Outline: verify filter against forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |        searchFilter      |    URL     |
      |   admin      |     relation   |    forecastReport   |   filterReportForecast  | VBStaging |

  @verifyAscendingDescendingAgainstForecastReport
  Scenario Outline: verify ascending & descending against forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |        order       |    URL    |
      |   admin      |     relation   |    forecastReport   |   tableForecast   | VBStaging |

  @verifyForecastReportPaginated
  Scenario Outline: verify forecast report should be paginated

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |        order       |    URL    |
      |   admin      |     relation   |    forecastReport   |   tableForecast   | VBStaging |



  @clickSiteNumberOnForecastReport
  Scenario Outline: click site number on forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |       site        |    URL    |
      |   admin      |     relation   |    forecastReport   |  reportForecast  | VBStaging |

  @verifyLeasesTabLinkOnForecastReport
  Scenario Outline: verify leases number on forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |             site              |    URL     |
      |   admin      |     relation   |    forecastReport   |  leasesNumberForecastReport  | VBStaging |

  @verifyAttributesAgainstForecastReport
  Scenario Outline: verify attributes on forecast report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify relationship should be present on the top "<relationships>"
    Then  verify executed date report on my dashboard
    Then  verify logo and rent roll present on page "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |


  @verifyColumnAgainstForecastReport
  Scenario Outline: verify column and fields against forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |



  @verifyFooterOnForecastReport
  Scenario Outline: verify footer on forecast report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |

  @verifyHideAndUnHideColumnOnForecastReport
  Scenario Outline: verify hide and un hide column on forecast report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  click on hide column "<report>"
    Then  selected column should be hidden "<report>"
    Then  click on hide column "<report>"
    Then  verify that selected column should be unhidden "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |           report          |    URL     |
      |   admin      |     relation   |    filterReportForecast   | VBStaging |




    @verifyGroupHierarchyOnForecastReport
  Scenario Outline: verify group hierarchy on forecast report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify group hierarchy on forecast report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    forecastReport   | VBStaging |


  @verifyDataOfForecastReportAgainstFloydSite
  Scenario Outline: verify data of forecast report against floyd site

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify data of rent roll report against partner portal "<partnerPortal>"
    When  I log out
    Given I am on floyd Page
    Then  search the values in floyd site "<site>"
    Then  verify data of rent roll report against floyd site "<floydSite>"
    Then  I click on floyd stage "<floydSite>"
    When  Click on additional features link "<site>"
    When  Click on add a portfolio "<site>"
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I log out from floyd site

    Examples:
      | credentials | relationships |     report      |      partnerPortal        |        site       |       floydSite       |    URL     |
      |   admin     |   relation   | forecastReport  | partnerPortalValueForecast | floydSiteForecast | floydSiteValueForecast| VBStaging |


    #New Leases Report
  #56&57&62
  @generateNewLeasesReport
  Scenario Outline: generate new leases report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify that records should be displayed on rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |        report        |    URL     |
      |   admin      |     relation   |    newLeasesReport   | VBStaging |

  @verifyFilterAgainstNewLeasesReport
  Scenario Outline: verify filter against new leases report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report        |         searchFilter     |    URL     |
      |   admin      |     relation   |    newLeasesReport   |   filterReportNewLeases  | VBStaging |

  @verifyAscendingDescendingAgainstNewLeasesReport
  Scenario Outline: verify ascending & descending against new leases report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report        |        order        |    URL     |
      |   admin      |     relation   |    newLeasesReport   |    tableNewLeases   | VBStaging |

  @downloadNewLeasesReport
  Scenario Outline: verify new leases report should be downloaded

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report        |         order      |    URL     |
      |   admin      |     relation   |    newLeasesReport   |   tableNewLeases   | VBStaging |

  @clickSiteNumberOnNewLeasesReport
  Scenario Outline: click site number on New leases report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report        |       site        |    URL     |
      |   admin      |     relation   |    newLeasesReport   |  reportNewLeases  | VBStaging |

  @verifyLeasesTabLinkOnNewLeasesReport
  Scenario Outline: verify leases number on new leases report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report        |             site              |    URL     |
      |   admin      |     relation   |    newLeasesReport   |  leasesNumberNewLeasesReport  | VBStaging |

  @verifyAttributesAgainstNewLeasesReport
  Scenario Outline: verify attributes on new leases report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify relationship should be present on the top "<relationships>"
    Then  verify executed date report on my dashboard
    Then  verify logo and rent roll present on page "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |         report       |    URL     |
      |   admin      |     relation   |    newLeasesReport   | VBStaging |


  @verifyColumnAgainstNewLeasesReport
  Scenario Outline: verify column and fields against new leases report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report       |    URL     |
      |   admin      |     relation   |    newLeasesReport  | VBStaging |

  @verifyFooterOnNewLeasesReport
  Scenario Outline: verify footer on new leases report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report        |     URL   |
      |   admin      |     relation   |    newLeasesReport   | VBStaging |

  @verifySearchAgainstNewLeasesReport
  Scenario Outline: verify search against new leases report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |        report         |    URL     |
      |   admin      |     relation   |    newLeasesReport   | VBStaging |

  @verifyDataOfNewLeasingReportAgainstFloydSite
  Scenario Outline: verify data of new leasing report against floyd site

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify data of rent roll report against partner portal "<partnerPortal>"
    When  I log out
    Given I am on floyd Page
    Then  search the values in floyd site "<site>"
    Then  verify data of rent roll report against floyd site "<floydSite>"
    Then  I click on floyd stage "<floydSite>"
    When  Click on additional features link "<site>"
    When  Click on add a portfolio "<site>"
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I log out from floyd site

    Examples:
      | credentials  | relationships |     report      |     partnerPortal        |      site        |     floydSite       |    URL   |
      |   admin      |   relation   | newLeasesReport | partnerPortalValueLeasing | floydSiteLeasing |floydSiteValueLeasing| VBStaging|


    @verifyGroupHierarchyOnNewLeasesReport
  Scenario Outline: verify group hierarchy on new leases report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify group hierarchy on new leases report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |         report       |    URL    |
      |   admin      |     relation   |    tableNewLeases   | VBStaging |

     #LeasingActivityReport
  #72&73&78
  @generateLeasingActivityReport
  Scenario Outline: generate leasing activity report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify that records should be displayed on rent roll report "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |            report           |    URL    |
      |   admin      |     relation   |    leasingActivityReport   | VBStaging |

  @verifyFilterAgainstLeasingActivityReport
  Scenario Outline: verify filter against leasing activity report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |            report          |           searchFilter         |    URL    |
      |   admin      |     relation   |    leasingActivityReport   |   filterReportLeasingActivity  | VBStaging |

  @verifyAscendingDescendingAgainstLeasingActivityReport
  Scenario Outline: verify ascending & descending against leasing activity report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |            report          |             order         |    URL     |
      |   admin      |     relation   |    leasingActivityReport   |    tableLeasingActivity   | VBStaging |

  @downloadLeasingActivityReport
  Scenario Outline: verify leasing activity report should be downloaded

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |             report         |           order          |    URL     |
      |   admin      |     relation   |    leasingActivityReport   |   tableLeasingActivity   | VBStaging |

  @clickSiteNumberOnLeasingActivityReport
  Scenario Outline: click site number on leasing activity report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |           report           |            site         |    URL     |
      |   admin      |     relation   |    leasingActivityReport   |  reportLeasingActivity  | VBStaging |

  @verifyAttributesAgainstLeasingActivityReport
  Scenario Outline: verify attributes on leasing activity report

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  I click on my dashboard "<report>"
    Then  click management agreement on my dashboard "<report>"
    Then  verify no parameter should be passed to generate rent roll report
    Then  verify relationship should be present on the top "<relationships>"
    Then  verify executed date report on my dashboard
    Then  verify logo and rent roll present on page "<report>"
    When  I log out

    Examples:
      | credentials  |  relationships |             report         |    URL     |
      |   admin      |     relation   |    leasingActivityReport   | VBStaging |


  @verifyColumnAgainstLeasingActivityReport
  Scenario Outline: verify column and fields against leasing activity report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |            report          |    URL     |
      |   admin      |     relation   |    leasingActivityReport   | VBStaging |

  @verifyFooterOnLeasingActivityReport
  Scenario Outline: verify footer on leasing activity report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |           report           |    URL     |
      |   admin      |     relation   |    leasingActivityReport   | VBStaging |


  @verifySearchAgainstLeasingActivityReport
  Scenario Outline: verify search against leasing activity report

    Given I am on "<URL>" Page
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
      | credentials  |  relationships |             report         |    URL     |
      |   admin      |     relation   |    leasingActivityReport   | VBStaging |



    #Data_Validation_TestCases

  @verifyDataOnPartnerPortalSiteAndFloydSite
  Scenario Outline: verify that data on site detail page for partner portal and floyd site should be same

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  verify data on partner portal site "<partnerPortalSite>"
    When  I log out
    Given I am on floyd Page
    Then  search the values in floyd site "<partnerPortalSite>"
    Then  verify data on floyd site "<partnerPortalSite>"
    Then  I click on floyd stage "<site>"
    When  Click on additional features link "<site>"
    When  Click on add a portfolio "<site>"
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I log out from floyd site

    Examples:
      | credentials  |  relationships |     partnerPortalSite     |        site        |    URL     |
      |   admin      |     relation   |  partnerPortalSiteData   |   floydSiteLeasing | VBStaging |


#  @verifyLabelsOnPartnerPortalSiteAndFloydSite
#  Scenario Outline: verify labels on partner portal and floyd site should be same
#
#    Given I am on "<URL>" Page
#    When  Login to vertical bridge with "<credentials>"
#    When  Click checkbox button
#    When  I click to the select partner view button
#    When  selects the "<relationships>"
#    Then  click the select button
#    Then  click on my sites button
#    Then  click on site link "<relationships>"
#    Then  click "<tab>" on site detail page
#    Then  verify labels on partner portal site "<partnerPortalSite>"
#    Then  click "<tab1>" on site detail page
#    Then  verify labels on partner portal site "<partnerPortalSite1>"
#    When  I log out
#    Given I am on floyd Page
#    Then  search the values in floyd site "<partnerPortalSite>"
#    Then  click "<partnerPortalSite>" on floyd site
#    Then  verify labels on floyd site "<partnerPortalSite>"
#    Then  click "<partnerPortalSite1>" on floyd site
#    Then  verify label on floyd site "<partnerPortalSite1>"
#    Then  I click on floyd stage "<site>"
#    When  Click on additional features link "<site>"
#    When  Click on add a portfolio "<site>"
#    When  Login to vertical bridge with "<credentials>"
#    When  I log out from floyd site
#
#    Examples:
#      | credentials  |  relationships  |     partnerPortalSite      |        site        |   tab   |   tab1  |     partnerPortalSite1    |    URL    |
#      |   admin      |     relation   |  partnerPortalSiteLabels   |   floydSiteLeasing |    FCC  | radCenter|  partnerPortalSiteLabels1| VBStaging |



#  @verifyDocumentsOnPartnerPortalSiteAndFloydSite
#  Scenario Outline: verify documents on partner portal and floyd site should be same
#
#    Given I am on "<URL>" Page
#    When  Login to vertical bridge with "<credentials>"
#    When  Click checkbox button
#    When  I click to the select partner view button
#    When  selects the "<relationships>"
#    Then  click the select button
#    Then  click on my sites button
#    Then  click on site link "<relationships>"
#    Then  click "<tab>" on site detail page
#    Then  click on document on site detail page
#    Then  verify documents on partner portal site "<partnerPortalSite>"
#    When  I log out
#    Given I am on floyd Page
#    Then  search the values in floyd site "<partnerPortalSite>"
#    Then  click "<partnerPortalSite>" on floyd site
#    Then  click on document on floyd site detail page
#    Then  verify documents on floyd site "<partnerPortalSite>"
#    Then  i switch back to main frame
#    Then  I click on floyd stage "<site>"
#    When  Click on additional features link "<site>"
#    When  Click on add a portfolio "<site>"
#    When  Login to vertical bridge with "<credentials>"
#    When  I log out from floyd site
#
#    Examples:
#      | credentials  |  relationships   |     partnerPortalSite       |        site        |     tab     |    URL     |
#      |   admin      | dataValidation  |  partnerPortalSiteDocument   |   floydSiteLeasing |  documentTab| VBStaging |

  @verifyTabsDataOnPartnerPortalSiteAndFloydSite
  Scenario Outline: verify tabs data on partner portal and floyd site should be same

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I click to the select partner view button
    When  selects the "<relationships>"
    Then  click the select button
    Then  click on my sites button
    Then  click on site link "<relationships>"
    Then  verify tabs data on partner portal site "<partnerPortalSite>"
    Then  click "<tab>" on site detail page
    Then  verify tabs data on partner portal site "<partnerPortalSite1>"
    When  I log out
    Given I am on floyd Page
    Then  search the values in floyd site "<partnerPortalSite>"
    Then  verify tabs data on floyd site "<partnerPortalSite>"
    Then  click "<partnerPortalSite>" on floyd site
    Then  verify tabs data div on partner portal site "<partnerPortalSite1>"
    Then  I click on floyd stage "<site>"
    When  Click on additional features link "<site>"
    When  Click on add a portfolio "<site>"
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I log out from floyd site

    Examples:
      | credentials  |  relationships   |     partnerPortalSite    |        site        |     tab     |   partnerPortalSite1   |    URL     |
      |   admin      | dataValidation  |  partnerPortalTabsData   |   floydSiteLeasing |  propertyTab |  partnerPortalTabsData1| VBStaging |
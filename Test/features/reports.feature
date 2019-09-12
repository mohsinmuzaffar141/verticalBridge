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
  @verifyActiveTenantUnderRentRollReport
  Scenario Outline: verify active tenant should be present under rent roll report

    Given I am on vertical bridge Page
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
      | credentials  |  relationships |        report       |
      |   admin      |     relation   |    rentRollReport   |

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
    Then  verify active tenant should be present under rent roll report "<report>"
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
    Then  verify active tenant should be present under rent roll report "<report>"
    Then  verify ascending and descending order of reports "<order>"
    When  I log out


    Examples:
      | credentials  |  relationships |        report       |   order   |
      |   admin      |     relation   |    rentRollReport   |   table   |


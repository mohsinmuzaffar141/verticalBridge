Feature: verify test cases of reports

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

  @verifytTotalManagementAgreement
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
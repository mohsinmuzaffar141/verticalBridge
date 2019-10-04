#Feature: verify test cases on floyd site
#
#  #130&132
#  @createNewPortfolio
#  Scenario Outline: create or add new portfolio on floyd site
#
#    Given I am on floyd Page
#    When  Click on additional features link "<site>"
#    When  Click on add a portfolio "<site>"
#    When  Login to vertical bridge with "<credentials>"
#    Then  Click on plus icon button
#    Then  Click on portfolio type "<portfolio>"
#    Then  Select portfolio name "<portfolio>"
#    Then  Click on save button "<portfolio>"
#    Then  verify portfolio should be created "<site>"
#    Then  verify tabs for portfolio "<portfolio>"
#    When  I log out from floyd site
#
#    Examples:
#      |   credentials   |     site     |    portfolio   |
#      |      admin      |   floydSite  |  portfolioType |
#
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

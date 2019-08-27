Feature: verify test cases on floyd site

  @createNewPortfolio
  Scenario Outline: create or add new portfolio on floyd site

    Given I am on floyd Page
    When  Click on additional features link "<site>"
    When  Click on add a portfolio "<site>"
    When  Login to vertical bridge with "<credentials>"
    Then  Click on plus icon button
    Then  Click on portfolio type "<portfolio>"
    Then  Select portfolio name "<portfolio>"
#    Then  verify edit and site inspection icon are not present on site header "<tab>"
#    When  I log out

    Examples:
      |   credentials   |     site     |    portfolio   |
      |      admin      |   floydSite  |  portfolioType |

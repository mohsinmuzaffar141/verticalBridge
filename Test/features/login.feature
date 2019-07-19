Feature: Login to vertical bridge

  @login
  Scenario Outline: Login to vertical bridge

    Given I am on vertical bridge Page
    When  Login to vertical bridge with "<credentials>"
    When  I log out

    Examples:
        | credentials  |
        | admin        |



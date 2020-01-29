Feature: Login to vertical bridge

  @login
  Scenario Outline: Login to vertical bridge

    Given I am on "<URL>" Page
    When  Login to vertical bridge with "<credentials>"
    When  Click checkbox button
    When  I log out

    Examples:
        | credentials  |     URL    |
        | admin        | VBStaging |



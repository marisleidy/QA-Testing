#
# All Rights Reserved.
#

#
 # @author
 # @file example.feature
 # @description: file with the features to execute the test
#

Feature: Google Search


Scenario: Searching Google
  Given I open Google's search page
  Then the title is "Google"
  And the Google "search_form" exists
  Then I write the word "Hello World" in the search form

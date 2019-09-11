#
# #
# Copyright (c) 2017 by PROS, Inc.  All Rights Reserved.
# This software is the confidential and proprietary information of
# PROS, Inc. ("Confidential Information").
# You may not disclose such Confidential Information, and may only
# use such Confidential Information in accordance with the terms of
# the license agreement you entered into with PROS.
#
# @author Marisleidy Mora

Feature: Login in newtours

 Background: Go to Newtours page
    Given I am in Newtours page
         
  Scenario Outline: Login in Newtours 
      I fill login form with Email Address "<User>" and Password "<password>"
      And I click the "Sing-In" button
    Then Connect works correctly
  Examples:
  | email        | password |
  | qualityadmin | pass1 |
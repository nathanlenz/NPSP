/*
    Copyright (c) 2009, Salesforce.org
    All rights reserved.
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of Salesforce.org nor the names of
      its contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT 
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS 
    FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE 
    COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, 
    INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, 
    BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; 
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER 
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT 
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN 
    ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
    POSSIBILITY OF SUCH DAMAGE.
*/
/**
 * @author Salesforce.org
 * @date 2014
 * @group TDTM
 * @group-content ../../ApexDocContent/TDTM.htm
 * @description Test class to provide coverage for TDTM triggers on objects for which there are currently no TDTM classes. 
 *
***/
@isTest
private with sharing class TDTM_TriggerScaffolds_TEST {

    /*************************************************************************** 
    * @description Currently we don't have any Trigger_Handler__c record for Lead. This test is 
    * just for test coverage, and to verify no exception gets thrown.
    **/
    @IsTest
    private static void tdtmLead() {
        insert new Lead(Company = 'tdtmLead', LastName = 'Smith');

        System.assert(true); //Just checking that we get to this point = no exception thrown
    }
    
    /*************************************************************************** 
    * @description Currently we don't have any Trigger_Handler__c record for Campaign. This test is 
    * just for test coverage, and to verify no exception gets thrown.
    **/
    @IsTest
    private static void tdtmCampaign() {
        insert new Campaign(Name = 'tdtmCampaign');
        
        System.assert(true); //Just checking that we get to this point = no exception thrown 
    }

    /***************************************************************************
    * @description Currently we don't have any Trigger_Handler__c record for Grant_Deadline__c. This test is
    * just for test coverage, and to verify no exception gets thrown.
    **/
    @IsTest
    private static void tdtmGrantDeadline() {
        List<Account> accts = UTIL_UnitTestData_TEST.createMultipleTestAccounts(1, null);
        insert accts;
        Opportunity opp = UTIL_UnitTestData_TEST.oppsForAccountList(accts, null,
            UTIL_UnitTestData_TEST.getClosedWonStage(), System.Today(), 100, null, null)[0];
        insert opp;

        Test.startTest();
        insert new Grant_Deadline__c(
            Name = 'tdtmGrantDeadline',
            Opportunity__c = opp.Id
        );
        Test.stopTest();

        System.assert(true); //Just checking that we get to this point = no exception thrown
    }
}
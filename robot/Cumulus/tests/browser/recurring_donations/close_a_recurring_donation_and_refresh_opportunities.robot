*** Settings ***

Resource        robot/Cumulus/resources/NPSP.robot
Suite Setup     Open Test Browser
Suite Teardown  Delete Records and Close Browser

*** Test Cases ***

Create and Close a Recurring Donation and Refresh Opportunities

    #Create a Recurring Donation
    &{contact} =                 API Create Contact             Email=jjoseph@robot.com
    &{recurringdonation} =       API Create Recurring Donation  npe03__Contact__c=&{contact}[Id]
    ...                          Name=Julian Recurring Donation
    ...                          npe03__Amount__c=100
    ...                          npe03__Installments__c=12
    ...                          npe03__Open_Ended_Status__c=Open
     ...                         npe03__Installment_Period__c=Monthly
    Go To Record Home            &{recurringdonation}[Id]

    #Find 1st Opportunity for Recurring Donation and Close It
    @{opportunity} =             Salesforce Query             Opportunity
    ...                          select=Id
    ...                          npe03__Recurring_Donation__c=&{recurringdonation}[Id]
    ...                          Recurring_Donation_Installment_Name__c=(1)
    Go To Record Home            ${opportunity}[0][Id]
    Click Link                   link=Edit
    Click Dropdown               Stage
    Click Link                   link=Closed Won
    Click Modal Button           Save

    #Find 2nd Opportunity for Recurring Donation and Close It
    @{opportunity} =             Salesforce Query             Opportunity
    ...                          select=Id
    ...                          npe03__Recurring_Donation__c=&{recurringdonation}[Id]
    ...                          Recurring_Donation_Installment_Name__c=(2)
    Go To Record Home            ${opportunity}[0][Id]
    Click Link                   link=Edit
    Click Dropdown               Stage
    Click Link                   link=Closed Won
    Click Modal Button           Save

    #Refresh Opportunities on Recurring Donation
    Go To Record Home            &{recurringdonation}[Id]
    Click Link                   link=Show more actions
    Click Link                   link=Refresh Opportunities

    #Find 2nd Opportunity for Recurring Donation
    @{opportunity} =             Salesforce Query             Opportunity
    ...                          select=Id
    ...                          npe03__Recurring_Donation__c=&{recurringdonation}[Id]
    ...                          Recurring_Donation_Installment_Name__c=(3)
    Go To Record Home            ${opportunity}[0][Id]
    Select Tab                   Details
    Confirm Value                Stage                        Closed Lost    Y
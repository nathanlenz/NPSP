import rd2EntryForm from 'c/rd2EntryForm';
import { createElement } from 'lwc';
import { registerApexTestWireAdapter, registerLdsTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getRecord } from 'lightning/uiRecordApi';

import getSetting from '@salesforce/apex/RD2_entryFormController.getRecurringSettings';
import checkRequiredFieldPermissions from '@salesforce/apex/RD2_entryFormController.checkRequiredFieldPermissions';

// Register as Apex wire adapter. Some tests verify that provisioned values trigger desired behavior.
const getSettingsAdapter = registerApexTestWireAdapter(getSetting);
const getRequiredFieldPermissionAdapter = registerApexTestWireAdapter(checkRequiredFieldPermissions);
const getRDObjectInfoAdapter = registerLdsTestWireAdapter(getObjectInfo);
const getRecordAdapter = registerLdsTestWireAdapter(getRecord);

// Mock data
const mockGetSettings = require('./data/getSettings.json');
const mockHasRequiredFieldPermissions = require('./data/checkRequiredFieldPermissions.json');
const mockRDObjectInfo = require('./data/npe03__Recurring_Donation__c.json');
const mockGetRecordData = require('./data/getRecord.json');

const RECORD_ID = 'a093D000006mPW2QAM';
const OBJECT_TYPE = 'npe03__Recurring_Donation__c'


describe('c-rd2-entry-form', () => {

    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        // Prevent data saved on mocks from leaking between tests
        jest.clearAllMocks();
    });

    describe('Edit Mode /w Multi-Currency', () => {
        it('Test #1', () => {
            const element = createElement('c-rd2-entry-form', {
                is: rd2EntryForm
            });

            // Set public properties
            element.recordId = RECORD_ID;
            element.objectApiName = OBJECT_TYPE;

            getSettingsAdapter.emit(mockGetSettings);
            getRequiredFieldPermissionAdapter.emit(mockHasRequiredFieldPermissions);
            getRDObjectInfoAdapter.emit(mockRDObjectInfo);
            getRecordAdapter.emit(mockGetRecordData);

            document.body.appendChild(element);
            
            // Validate if correct parameters have been passed to base components
            const formElement = element.shadowRoot.querySelector(
                'lightning-record-edit-form'
            );
            expect(formElement.recordId).toBe(RECORD_ID);
            expect(formElement.objectApiName).toBe(OBJECT_TYPE);

            // Validate the first button (cancel)
            const buttonElement = element.shadowRoot.querySelector('lightning-button');
            expect(buttonElement.label).toBe('c.stgBtnCancel');

            // Validate that the CurrencyIsoCode field renders since multi-currency is mock enabled
            const currencyFieldDiv = element.shadowRoot.querySelector('lightning-layout-item[data-id=rd-currency-field]');
            console.log(JSON.stringify(currencyFieldDiv));
            expect(currencyFieldDiv.textContent).toBe('c.lblCurrency');

            // return Promise.resolve().then(() => {
            //     const div = element.shadowRoot.querySelector('.rd-field-currencycode');
            //     console.log(div.textContent);
            //     expect(div.textContent).toBe('Hello, World!');
            // });
        });
    });


});

/**
 * Placeholder/stub for actual implementation.
 */

const formTemplateJSON = '{"name":"Test Template","description":"Test Template Description","layout":{"fieldMappingSetDevName":"Migrated_Custom_Field_Mapping_Set","version":"1.0","sections":[{"id":"f87f3a33-9ad1-5742-45c7-90dea91413d5","displayType":"accordion","defaultDisplayMode":"expanded","displayRule":"displayRule","label":"Gift Entry Form","elements":[{"label":"Account1 Name","required":true,"value":"Account1_Name_4ff0c7b6b","allowDefaultValue":false,"sectionId":"f87f3a33-9ad1-5742-45c7-90dea91413d5","dataType":"STRING","elementType":"STRING","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Account1 Name","dataImportFieldMappingDevNames":["Account1_Name_4ff0c7b6b"]},{"label":"Contact1 Personal Email","required":true,"value":"Contact1_Personal_Email_5d96898ec","allowDefaultValue":false,"sectionId":"f87f3a33-9ad1-5742-45c7-90dea91413d5","dataType":"EMAIL","elementType":"EMAIL","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Contact1 Personal Email","dataImportFieldMappingDevNames":["Contact1_Personal_Email_5d96898ec"]},{"label":"Donation Amount","required":true,"value":"Donation_Amount_2af996e63","allowDefaultValue":false,"sectionId":"f87f3a33-9ad1-5742-45c7-90dea91413d5","dataType":"CURRENCY","elementType":"CURRENCY","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Donation Amount","dataImportFieldMappingDevNames":["Donation_Amount_2af996e63"]},{"label":"Donation Date","required":true,"value":"Donation_Date_86882c494","allowDefaultValue":false,"sectionId":"f87f3a33-9ad1-5742-45c7-90dea91413d5","dataType":"DATE","elementType":"DATE","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Donation Date","dataImportFieldMappingDevNames":["Donation_Date_86882c494"]},{"label":"Payment Check/Reference Number","required":false,"value":"Payment_Check_Reference_Number_114c3cad8","allowDefaultValue":false,"sectionId":"f87f3a33-9ad1-5742-45c7-90dea91413d5","dataType":"STRING","elementType":"STRING","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Payment Check/Reference Number","dataImportFieldMappingDevNames":["Payment_Check_Reference_Number_114c3cad8"]}]},{"id":"4a62a421-53c9-c146-179a-ed04e55155b4","displayType":"accordion","defaultDisplayMode":"expanded","displayRule":"displayRule","label":"Empty Section","elements":[]},{"id":"2d053317-5a78-14d4-a15d-c78af07c2fd4","displayType":"accordion","defaultDisplayMode":"expanded","displayRule":"displayRule","label":"Another Section","elements":[{"label":"Household Phone","required":false,"value":"Household_Phone_896f353af","allowDefaultValue":false,"sectionId":"2d053317-5a78-14d4-a15d-c78af07c2fd4","dataType":"PHONE","elementType":"PHONE","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Household Phone","dataImportFieldMappingDevNames":["Household_Phone_896f353af"]}]}]},"batchHeaderFields":[{"label":"Batch Name","required":true,"value":"Name","allowDefaultValue":true,"dataType":"STRING","defaultValue":"Default Batch Name","elementType":"STRING","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Batch Name","dataImportFieldMappingDevNames":["Name"]},{"label":"Batch Description","required":false,"value":"npsp__Batch_Description__c","allowDefaultValue":false,"dataType":"TEXTAREA","elementType":"TEXTAREA","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Batch Description","dataImportFieldMappingDevNames":["npsp__Batch_Description__c"]},{"label":"Donation Matching Behavior","required":false,"value":"npsp__Donation_Matching_Behavior__c","allowDefaultValue":true,"dataType":"PICKLIST","picklistOptions":[{"label":"Do Not Match","value":"Do Not Match"},{"label":"No Match","value":"No Match"},{"label":"Single Match","value":"Single Match"},{"label":"Single Match or Create","value":"Single Match or Create"},{"label":"Best Match","value":"Best Match"},{"label":"Best Match or Create","value":"Best Match or Create"}],"defaultValue":"No Match","elementType":"PICKLIST","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Donation Matching Behavior","dataImportFieldMappingDevNames":["npsp__Donation_Matching_Behavior__c"]},{"label":"Gift Batch","required":false,"value":"npsp__GiftBatch__c","allowDefaultValue":true,"dataType":"BOOLEAN","defaultValue":true,"elementType":"BOOLEAN","displayRule":"placeholder","validationRule":"placeholder","customLabel":"Gift Batch","dataImportFieldMappingDevNames":["npsp__GiftBatch__c"]}]}';


const getFormTemplate = () => {
    return new Promise((resolve, reject) => {
        resolve(JSON.parse(formTemplateJSON));
    });
};

const inputTypeByDescribeType = {
    'CHECKBOX': 'checkbox',
    'CURRENCY': 'number',
    'DATE': 'date',
    'DATETIME': 'datetime-local',
    'EMAIL': 'email',
    'NUMBER': 'number',
    'STRING': 'text',
    'PHONE': 'tel',
    'TEXT': 'text',
    'TIME': 'time',
    'URL': 'url'
}

const getInputTypeFromDataType = (dataType) => {
    return inputTypeByDescribeType[dataType];
}

export { getFormTemplate, getInputTypeFromDataType }
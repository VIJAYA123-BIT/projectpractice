public with sharing class YourApexClass {
    @AuraEnabled(cacheable=true)
    public static Certificate_Training_Contact__c getRecordDetails(Id recordId) {
        return [SELECT Name, Account_name__c FROM Certificate_Training_Contact__c WHERE Id = :recordId];
    }
}

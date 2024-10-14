
public with sharing class PrintRecords {
    @AuraEnabled(cacheable= true)
    public  Static List<Account> PrintAccountRecords( Integer numberEntered) {
       list<Account> a = [select id, Name,Industry, CreatedDate from Account Order by CreatedDate DESC limit : numberEntered];
        return a;

    }
    @AuraEnabled
    public  Static void AddAccountRecords( String EntereduserName , String EnteredIndustry) {
        // try {
        // Account a = new Account();
        // a.Name = EntereduserName;
        //     insert a;
        // } catch (Exception e) {
        //     // Handle the exception properly
        //     throw new AuraHandledException('Error inserting Account: ' + e.getMessage());
        // }
        Account newAccount = new Account(Name = EntereduserName , Industry = EnteredIndustry);
        insert newAccount;
    }
    @AuraEnabled(cacheable= true)
    public Static List<Account> LdtWithRowActionsmethod() {
        List<Account> a = [select Id ,Name, Industry, Phone from Account where Industry!= null and Phone != null Order by CreatedDate DESC limit 10];
        return a;
    }
    
    @AuraEnabled
    public static void delSelectedAccs(Id lstAccIds){
        list<Account> acb = [select Id , Name from Account where Id =: lstAccIds];
        system.debug('the list is '+acb);
        system.debug('the length of ac is '+ acb.size());
        delete acb;
        list<Account> achb = [select id , Name from Account where id =: lstAccIds];
        system.debug('deleted successfully');
        system.debug('the length of ac is '+ achb.size());
        // list<Account> ajc=[select Id ,Name, Industry, Phone from Account where Industry!= null and Phone != null  Order by CreatedDate DESC limit 10];
        // system.debug('the data is shifted'+ ajc);
        // return ajc;
    }

}
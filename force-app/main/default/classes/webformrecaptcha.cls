public with sharing class webformrecaptcha {
    @AuraEnabled
    
    public  static void webformrecaptchaSchoolrecord(String schoolName, String Email , String Phone) {

        try {
            Student__c newPro = new Student__c();
            newPro.Name = schoolName;
            newPro.Phone_number__c = Phone;
            newPro.Email_Id__c = Email;
            insert newPro;
        } catch (exception ex) {
            throw ex;
        }

    }
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountInfo(){
        return [select Name, Type,Phone,Industry,CreatedDate  from Account  order by CreatedDate DESC]; 
    }
    

} 
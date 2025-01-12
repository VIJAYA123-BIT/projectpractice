public with sharing class wiredemo {
    @AuraEnabled(Cacheable= true)
    public static list<Account> firstwiredemo() {
        list<Account> acc = [select id , Name from Account order by Name asc limit 7];
        return acc;

    }
    @AuraEnabled
    public static List<Account> Secondwiredemo() {
        List<Account> acc = [select id , Name from Account order by Name asc limit 7];
        return acc;

    }
    @AuraEnabled
    public static list<Contact> Thirdwiredemo(String Accountvalue){
        list<contact> con = [select id ,accountId, Email,Phone, LastName from contact where accountId =: Accountvalue];
        return con;
    }
}
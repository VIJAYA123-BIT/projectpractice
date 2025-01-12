import { LightningElement , api } from 'lwc';
import AccountObject from '@salesforce/schema/Account';
import Name_field from '@salesforce/schema/Account.Name';
import Type_field from '@salesforce/schema/Account.Type';
import industry_field from '@salesforce/schema/Account.Industry';
import contactObject from '@salesforce/schema/Contact';

import Second_LastName_field from '@salesforce/schema/Contact.LastName';
import Second_Email_field from '@salesforce/schema/Contact.Email';
import Second_Description_field from '@salesforce/schema/Contact.Description';
export default class Lightninglds extends LightningElement {
   @api recordId ='0012w000024KxIwAAK'; // without adding api also work same
    @api objectApiName = AccountObject; // without adding api also work same
    Name_field =Name_field;
    Type_field = Type_field;
    industry_field = industry_field;

    Second_LastName_field = Second_LastName_field;
    Second_Email_field = Second_Email_field;
    Second_Description_field = Second_Description_field;

    @api secondrecordId 
   @api secondobjectApiName = contactObject
   
}
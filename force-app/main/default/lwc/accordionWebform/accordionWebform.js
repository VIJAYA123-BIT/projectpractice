import { LightningElement , wire } from 'lwc';
import getAccountInfo from '@salesforce/apex/webformrecaptcha.getAccountInfo';
// import AddAccountInfo from '@salesforce/apex/webformrecaptcha.AddAccountInfo';
import {createRecord } from 'lightning/uiRecordApi';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lightning_ui_api_record */
export default class AccordionWebform extends LightningElement {
    columns= [
        {label:'Account Name',fieldName : 'Name'},
        {label:'Industry',fieldName : 'Industry'},
    ]
    AccountName=''
    accountIndustry=''
    isLoading = true;
    records = [];
    // PAGINATION PROPERTIES
    pageSize = 10;
    pageNumber = 1;
    totalRecords = 0;
    enablePagination = true;
    inputHandler(event){
        const {name,value} = event.target;
        if(name == 'userName'){
            this.AccountName = value;
        }
        else if (name == 'userIndustry'){
            this.accountIndustry = value;
        }
    }
    AddHandler(){
        console.log('the record processing is started')
        const fields={
            Name: this.AccountName,
            Industry : this.accountIndustry
        }
        const objectRecord ={
            apiName:'Account', fields
        };
        createRecord(objectRecord).then((record) => {
            console.log('the record get saved');
            this.AccountName = ''; 
            this.accountIndustry ='';

        }).catch(error =>{
            console.log('the record is not saved');

        })
    }
    records=[]
    @wire(getAccountInfo) datafetched({error, data}){
        if(data){
            // this.displaytable = data;
                this.isLoading = false;
                this.records = data
                this.totalRecords = this.records.length;
            }
        else if(error){  
            this.isLoading = false;
            console.log('Error which fetching data- ', result.error);

        }
    }
    get hasRecords() {
        return this.records.length > 0;
    }

    // PAGINATION PROPERTY - CALCULATE AND RETURN RECORDS TO DISPLAY
    get displaytable() {
        let from = (this.pageNumber - 1) * this.pageSize,
            to = this.pageSize * this.pageNumber;
        return this.records?.slice(from, to);
    }
    get showPaginator() {
        return this.enablePagination && this.hasRecords;
    }
    // WILL AUTOMATICALLY CALLED FROM PAGINATOR ON PAGE NUMBER OR SIZE CHANGE
    paginationChangeHandler(event) {
        if (event.detail) {
            this.pageNumber = event.detail.pageNumber;
            this.pageSize = event.detail.pageSize;
        }
    }

}
